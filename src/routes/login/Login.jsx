import { useState } from "react"
import CustomInput from "../../components/custom-input/CustomInput";
import {  useNavigate } from "react-router-dom";

function Login({setLoggedIn}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const signIn = () => {
    if (email !== '')
    {
      setLoggedIn(true);
      navigate('/', { replace: true });
    }
      
}

  return (
    <div className="flex flex-col gap-12 justify-center items-center text-center h-screen bg-indigo-600 ">
      <h1 className="text-white text-xl sm:2xl md:text-5xl ">Welcome to Hack Ideas</h1>
      <form className="flex flex-col w-11/12 md:w-5/12 gap-8 justify-center items-center" onSubmit={signIn}>
      <CustomInput  type={'email'} name={'Please enter your Email Id'} placeholder={'john@gmail.com'} onchange={handleInputChange} value={email} />
            <button type='submit' className="bg-white  w-2/3 md:w-1/3 text-blue-600 font-bold py-2 px-4 rounded-full"> Login</button>
      </form>
     </div>
  )
}

export default Login