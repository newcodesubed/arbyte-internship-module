import { FaLinkedinIn, FaGithub,FaInstagram } from "react-icons/fa";

import logo from '../assets/logo.webp';
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home"> 
                <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
            </a>
        </div>
        <div className='m-8 text-2xl flex items-center justify-center gap-4'>
            <a href='https://www.linkedin.com/in/subed/' target='_blank' rel='noopener noreferrer' 
            aria-label='LinkedIn'
            className='hover:text-stone-500'>
                <FaLinkedinIn />
            </a>
            <a href='https://github.com/newcodesubed' target='_blank' rel='noopener noreferrer' 
            aria-label='Github'
            className='hover:text-stone-500'>
                <FaGithub />
            </a>
            <a href='https://www.instagram.com/learn_and_thrive17/' target='_blank' rel='noopener noreferrer' 
            aria-label='Instagram'
            className='hover:text-stone-500'>
                <FaInstagram />
            </a>
            

        </div>
    </nav>
  )
}

export default Navbar