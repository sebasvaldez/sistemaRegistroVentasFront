import Alert from "react-bootstrap/Alert";

export const AlertsErrors=({errorText})=> {
  return (
    <>
      <Alert variant="danger" className="p-1 text-center">
        {errorText}
      </Alert>
      
    </>
  );
}

