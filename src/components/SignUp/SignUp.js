import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
const [notMatched,setNotMatched]=useState('')
const [minifyError,setMinifyError]=useState('')
const navigate=useNavigate()
const [signInWithGoogle] = useSignInWithGoogle(auth);

const options={sendEmailVerification:true}
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,options);
const handleSubmit=(event)=>{
    event.preventDefault()
const email=event.target.email.value
const password=event.target.password.value
const ConfirmPassword=event.target.ConfirmPassword.value


if(ConfirmPassword===password){
    createUserWithEmailAndPassword(email,password)
    .then(()=>{
        navigate("/login")
    })
    setNotMatched("")
}
else{setNotMatched("Password is not matched")}

}
const location=useLocation()
    let from = location.state?.from?.pathname || "/";
// const x=error?.message.split('/')
// const y=x[1].split(')')
// setMinifyError(y[0])
// console.log(user,error);
    return (
        <div className=' md:w-1/4 w-full mx-auto border md:p-10 p-2 md:mt-10 rounded'>
        <p className='text-3xl text-center'>  Sign Up </p><br />
        <div className="">
            <form onSubmit={handleSubmit}>
               
                <label htmlFor="email" className='block '>E-mail</label>
                <input type="email" name="email" id="email" className='p-1 text-xl border mb-4 w-full' required /><br />
                <label htmlFor="password" className='block'>Password</label>
                <input type="password" name='password' className='p-1 text-xl border mb-4 w-full' required/> <br />
                <label htmlFor="ConfirmPassword" className='block'>Confirm Password</label>
                <input type="password" name='ConfirmPassword' className='p-1 text-xl border mb-4 w-full' required/> <br />
                <p className='text-red-400'>{
                
                error?.message
                // minifyError
                
                }
                </p>
                
               <p className='text-red-400 text-sm mt-0 mb-2'>{notMatched}</p>
                <button type="submit" className='border w-full py-2 hover:bg-orange-300 bg-orange-200' >Sign up</button>
                <p className='text-sm my-2'>Already have an Account? <Link to='/login' className='text-orange-400'>Log in </Link>  </p>
            </form>
            <div className='flex items-center my-3'>
                <hr className='border-gray-400 h-px w-full mr-2' />
                <p>or</p>
                <hr className='border-gray-400 h-px w-full ml-2' />
            </div>
            <div>
                <button  onClick={()=>{
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

export default SignUp;