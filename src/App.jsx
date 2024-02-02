
import { Route, Routes } from 'react-router-dom'
import Login from '../src/routes/login/Login';
import './App.css'
import HomePage from './routes/home/HomePage';
import ProtectedRoute from './utils/protected-routes/ProtectedRoute';
import PageNotFound from './routes/page-not-found/PageNotFound';
import SubmitIdea from './routes/submit-idea/SubmitIdea';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/sign-in" element={<Login setLoggedIn={setLoggedIn} />} ></Route>
      <Route path='/' element={<ProtectedRoute isLoggedIn={ isLoggedIn} />}>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/submit-idea' element={<SubmitIdea/>}></Route>
      </Route>
      <Route path='/*' element={<PageNotFound/>}></Route>
      
   </Routes>

  )
}

export default App
