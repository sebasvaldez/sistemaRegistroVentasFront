import {Routes, Route} from 'react-router-dom'
import {DashboardAdminPage} from '../pages/DashboardAdminPage'
export const GeneralLayout = () => {
  return (
    <Routes>
        <Route path='/dashboardadmin' element={<DashboardAdminPage/>} />
    </Routes>
  )
}
