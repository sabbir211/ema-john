import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import logo from "../../images/Logo.svg"
import "./header.css"
import CustomLink from '../CustomLink/CustomLink';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // navbar loggler 
    const [open, setOpen] = useState(false)
    return (
        <div className='navbar flex flex-row-reverse md:flex-row justify-end md:justify-between relative'>
            <div >
                <img className='ml-5' src={logo} alt="" />
            </div>
            <div className="text-3xl text-white md:hidden" onClick={() => setOpen(!open)}>
                {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}

            </div>
            <div className={open ? "block  absolute top-16 left-0 p-4  bg-[#1C2B35] duration-700 text-white items-center" : "absolute left-[-180px] top-14 duration-500 md:static md:flex items-center "}>
                <CustomLink className="px-2" to="/home">Home</CustomLink>
                <CustomLink className="px-2" to="/order">Order</CustomLink>
                <CustomLink className="px-2" to="/inventory">Inventory </CustomLink>
                { 
                    user? <CustomLink  className="px-2" to="/" onClick={()=>{
                        signOut(auth)
                        
                        }}>Log out</CustomLink>:<>
                    <CustomLink  className="px-2" to="/login">Log in</CustomLink>
                    <CustomLink   className="px-2" to="/signup">Sign up</CustomLink>
                    
                    </>
                }
               
                
                <div className='flex items-center'>
<img src={user?.photoURL} alt="" className='w-10  rounded-full mr-2' />
            <p className='text-white items-center'>{user?.displayName}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;