import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth"
import auth from '../../firebase.init';
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const handleSubmit=(event)=>{
          event.preventDefault()       
          signInWithEmailAndPassword(email,password)
          .then(()=>{

              navigate(from, { replace: true });
          })
        }
        if(user){
            console.log(user?.user);
   navigate("/")
        }
    
    return (
        <div className=' md:w-1/4 w-full mx-auto border md:p-10 p-2 md:mt-10 rounded'>
            <p className='text-3xl text-center'>  Sign in </p><br />
            <div className="">
                <form>
                    <label htmlFor="email" className='block '>E-mail</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className='p-1 text-xl border mb-4 w-full' required/><br />
                    <label htmlFor="password" className='block'>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" name='password' className='p-1 text-xl border mb-4 w-full' required/> <br />
                    <p>{
                    error?.message
                    }
                    </p>
                    <button onClick={handleSubmit} type="submit" className='border w-full py-2 hover:bg-orange-300 bg-orange-200' >Login</button>
                    <p className='text-sm my-2'>New to Ema-john? <Link to='/signup' className='text-orange-400'>Create New Account</Link>  </p>
                </form>
                <div className='flex items-center my-3'>
                    <hr className='border-gray-400 h-px w-full mr-2' />
                    <p>or</p>
                    <hr className='border-gray-400 h-px w-full ml-2' />
                </div>
                <div>
                <button onClick={()=>{
            signInWithGoogle()
                .then(()=>{

                    navigate(from, { replace: true });
                })
                }} className='w-full border py-2 rounded flex items-center justify-center hover:bg-gray-200'><img src="Google.png" alt="" className='w-8 mr-3 text-sm' />Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;