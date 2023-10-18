import React from 'react';
import { Link ,useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div className='bg-gray-100 w-full h-screen'>
            <header className='flex justify-between items-center px-16 py-4 border bg-white shadow'>
                <h1 className='text-4xl font-semibold tracking-wide'>Utica</h1>
                <ul className='flex gap-8'>
                    <li className=''>
                        <Link className='uppercase tracking-wide' to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className='uppercase tracking-wide'>

                        Team

                    </li>
                    <li className='uppercase tracking-wide'>
                        Contact
                    </li>
                    <li>
                        <Link className='uppercase tracking-wide' to={'/register'}>
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link className='uppercase tracking-wide' to={'/login'}>
                            Login
                        </Link>
                    </li>
                </ul>
            </header>


            <section className='flex justify-between px-4 mt-8'>
                <div className='mt-7 w-[35%]'>
                    <h2 className='text-3xl font-semibold leading-9'>
                        Use HTML creator to build a website with no coding
                    </h2>

                    <p className='mt-8 leading-6 text-gray-400 tracking-wide'>
                        Simple drag-and-drop HTML editor lets you implement any ideas for HTML Templates. Use responsive image gallery, video backgrounds, parallax,  hamburger menu, sticky header and animation to bring sites to life.
                    </p>

                    <button
                    onClick={()=> navigate('/register')}
                    
                    className='tracking-wide bg-[rgb(119,161,222)] text-white uppercase py-2 px-8 font-semibold text-lg rounded-xl shadow mt-10'>
                        all feature
                    </button>
                </div>
             
                <div className='w-[60%] shadow'>
                    <video autoPlay muted loop src="https://csite.resource.nicepage.com/editor.mp4?v2"></video>
                </div>
            </section>
        </div >
    )
}

export default Home