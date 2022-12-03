import { Navigate, Outlet, useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const location = useLocation()
  const currentLocation = location.pathname
  const homePath = import.meta.env.VITE_HOME_PATH
  const loginPath = import.meta.env.VITE_LOGIN_PATH
  const token = localStorage.getItem('token')

  if (currentLocation === '/') {
    if (token === null) {
      return <Navigate to={loginPath} replace={true}></Navigate>
    } else if (homePath !== '/') {
      return <Navigate to={homePath} replace={true}></Navigate>
    }
  }

  return (
    <div className="flex h-full min-h-screen flex-col items-center font-sans">
      <Outlet />
    </div>
  )
}

export default App
