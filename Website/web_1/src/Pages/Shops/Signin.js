import React from 'react'
import '../Shops/Signstyle.css';
import img1 from '../../Image/login-bg.jpg';
import img2 from '../../Image/sign-bg.jpg';
import { Link } from 'react-router-dom';
function Signin() {
    return (
        <div>
            {/* bg-img*/}
            <div className='sign-bg p-3'>
                <div className=' flex'>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='hr-4 mt-3'></div>
                    <div>
                        <p>Sign In</p>
                    </div>
                </div>
                <div className='text-start'>
                    <p className='text-2xl font-semibold'>Sign In</p>
                </div>
            </div> {/* bg-img*/}
            <div className='flex justify-center items-center'>
                <div className='lg:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className='signpart-1 '>
                        <div className='max-w-lg shadow rounded-lg bg-slate-100'>
                            <img src={img1} alt='image' />
                            <div className='p-2'>
                            <div className='login-content flex bg-slate-100 '>
                                <div className=' p-2 mt-2 rounded sign-icon flex justify-center items-center h-10 w-10 bg-white'>
                                    <i className=" text-2xl ri-lock-line text-red-400"></i>
                                </div>
                                <div className='tlogin p-2'>
                                    <h1 className='text-slate-800 text-xl font-semibold text-start '>Login Here</h1>
                                    <p className='text-start'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                </div>
                            </div>
                            {/* form start */}
                            <div>
                                <form className='p-3'>
                                    <div className='bg-white h-16 w-full   rounded flex justify-center items-center gap-2 '>

                                        <span><i class="fa-regular fa-user "></i></span>
                                        <input placeholder='Username/email address' type='email' className=' outline-none' />
                                    </div>
                                    <div className='bg-white h-16 w-full mt-5  rounded flex justify-center items-center gap-2 '>

                                        <span><i class="fa-solid fa-key"></i></span>
                                        <input placeholder='Password' type='email' className=' outline-none' />
                                    </div>
                                </form>
                                <div className='checbox flex justify-between items-center p-2'>
                                    <div className='form-check'>
                                        <input type='checkbox' ></input>
                                        <label > Remember me</label>
                                    </div>
                                    <div className='forget'>
                                        <a href='#' className=' underline'>Forget Password</a>
                                    </div>
                                </div>
                                <div className=' bg-red-600 rounded h-14 flex justify-center items-center p-2'>
                                    <button className='text-white text-lg font-semibold border-0'>Login Now
                                        <i class="fa-solid fa-arrow-right mx-2"></i>
                                    </button>
                                </div>
                            </div>
                            {/* form close */}
                            </div>
                        </div>{/* card close */}
                    </div>{/* signpart-1 close */}
                    <div className='singpart-2'>
                        
                    <div className='max-w-lg shadow rounded-lg bg-slate-100'>
                            <img src={img2} alt='image' />
                            <div className='login-content flex bg-slate-100'>
                                <div className=' p-2 mt-2 rounded sign-icon flex justify-center items-center h-10 w-10 bg-white'>
                                <i class="ri-folder-user-fill text-2xl text-red-400"></i>
                                </div>
                                <div className='tlogin p-2'>
                                    <h1 className='text-slate-800 text-xl font-semibold text-start '>
                                        Sign Up</h1>
                                    <p className='text-start'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                </div>
                            </div>
                            {/* form start */}
                            <div className='p-3'>
                                <form>
                                    <div className='bg-white h-16 w-full   rounded flex justify-center items-center gap-2 '>

                                        <span><i class="fa-regular fa-envelope"></i></span>
                                        <input placeholder='Email address' type='email' className=' outline-none' />
                                    </div>
                                    <div className='bg-white h-16 w-full mt-5  rounded flex justify-center items-center gap-2 '>

                                        <span><i class="fa-solid fa-key"></i></span>
                                        <input placeholder='Password' type='email' className=' outline-none' />
                                    </div>
                                </form>
                                <div className='checbox flex justify-between items-center p-2'>
                                    <div className='form-check'>
                                        
                                        <a href='#' className=' underline'> Already Have Account?</a>
                                    </div>
                                    
                                </div>
                                <div className=' bg-gray-200 hover:bg-black  rounded h-14 flex justify-center items-center p-2'>
                                    <button className='text-black text-lg  hover:text-white font-semibold outline-none border-0'>Register Now
                                        <i class="fa-solid fa-arrow-right mx-2"></i>
                                    </button>
                                </div>
                            </div>
                            {/* form close */}
                            </div>  
                        </div>{/* card close */}
                    </div>
                </div>   {/* grid close */}
                    
            </div>
        
    )
}

export default Signin
