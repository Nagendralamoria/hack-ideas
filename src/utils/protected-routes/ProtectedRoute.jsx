
import { Outlet} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
function ProtectedRoute() {

  return (
      <div>
          <Navbar />
          <Outlet/>
    </div>
  )
}

export default ProtectedRoute