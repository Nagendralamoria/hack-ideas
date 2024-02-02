
import {  Outlet, useNavigate} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import { IdeasProvider } from "../../context/IdeasData.context"
import { useEffect} from "react"
function ProtectedRoute({isLoggedIn}) {
  let userEmail = isLoggedIn;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!userEmail) {
      navigate('/sign-in');
    }
  }, [userEmail, navigate]);

  return userEmail ? (
    <div>
      <Navbar />
      <IdeasProvider>
        <Outlet />
      </IdeasProvider>
    </div>) : null; 
  
}

export default ProtectedRoute