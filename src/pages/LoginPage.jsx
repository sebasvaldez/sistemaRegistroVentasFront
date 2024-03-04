import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  const imagenes = [
    "https://http2.mlstatic.com/D_NQ_NP_2X_816025-MLU72748491987_112023-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_790654-MLA74307405630_022024-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_717038-MLU74337603599_022024-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_852598-MLU74290529283_012024-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_803059-MLA70970234420_082023-F.webp",
  ];

  const randomImage = imagenes[Math.floor(Math.random() * imagenes.length)];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="login-container">
      <LoginForm handle={handleSubmit} randomImage={randomImage} />
    </div>
  );
};
