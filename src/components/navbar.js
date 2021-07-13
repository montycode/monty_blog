import React, { useState} from 'react'
import Logo from '../images/MontyCode_X.png'
import { Link } from "gatsby"

const Navbar = ({ children }) => {
    const [show, setShow] = useState(false)

    const handleMenu = () => {
        setShow(!show)
    }

    return (
        <div className="bg-white py-4 md:py-10 md:px-20">
            <header className="mx-auto container px-4 xl:px-0">
                <div className="flex items-center justify-between">
                    <Link to="/"> 
                        <img loading="lazy" className="w-48" src={Logo}/>
                    </Link>
                    <div>
                        <div onClick={handleMenu} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </div>
                        <div id="menu" className="md:block lg:block" hidden={!show}>
                            <div onClick={handleMenu} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-4">
                                <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="flex md:flex text-3xl md:text-base lg:text-base lg:flex flex-col md:flex-row lg:flex-row justify-center items-center fixed md:relative lg:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                                <li className="md:mr-8 lg:mr-10 flex items-center" key='Portfolio'>
                                    <a className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="https://montydev.com">Portfolio</a>
                                </li>
                                <li className="md:mr-0 flex items-center">
                                    <Link className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" key='Contact' to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {children}
        </div>
    )
}

export default Navbar
