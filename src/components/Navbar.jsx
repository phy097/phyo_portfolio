import phyo from "../assets/me.jpeg";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-14 h-14 rounded-full' src={phyo} alt="phyo"/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="#"><FaLinkedin/></a>
            <FaGithub/>
            <FaLine/>
            <FaInstagram/>
        </div>
    </nav>
  );
}

export default Navbar;
