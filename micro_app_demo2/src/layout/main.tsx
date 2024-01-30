import { Outlet, useLocation } from 'react-router-dom'


function Main() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Outlet />
     </div>
    )
  }
  
  export default Main