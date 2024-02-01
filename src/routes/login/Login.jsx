import { useState } from "react"

function Login() {
  const [email, setEmail] = useState('');
  const signIn = () => {
      if (email!==null) {
        console.log("no error", email)
      }
      
}

  return (
    <div className="flex flex-col gap-12 justify-center items-center text-center h-screen bg-indigo-600 ">
      <h1 className="text-white text-5xl ">Welcome to Hack Ideas</h1>
      <form className="flex flex-col w-5/12 gap-8 justify-center items-center" onSubmit={signIn}>
        <label className="text-2xl text-white ">Please enter your Email Id</label>
        <input className="p-4 rounded-full w-full" placeholder="john@gmail.com" onChange={e=>{setEmail(e.target.value)}} value={email} required/>
        <button type='submit' className="bg-white  w-1/3 text-blue-600 font-bold py-2 px-4 rounded-full"> Login</button>
        </form>
    </div>
  )
}

export default Login