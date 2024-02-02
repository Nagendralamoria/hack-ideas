import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center p-4  border-b-2 border-grey-500 ">
      <Link to='/' className="font-sans md:text-2xl lg:text-4xl sm:text-xl font-bold text-indigo-600" >Hack Ideas</Link>
      <div className="flex gap-4 items-center">
        <Link to='/' className="sm:text-lg md:text-xl lg:2xl">Home</Link>
        <Link to='/submit-idea' className="bg-indigo-600 px-4 py-2 rounded-full text-white sm:text-md md:text-lg lg:text-xl">Submit Idea</Link>
      </div>
   </nav>
  )
}

export default Navbar