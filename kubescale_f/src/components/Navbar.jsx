import { TbBrandLinkedin } from "react-icons/tb";
import { SiPlanetscale } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className='w-full flex justify-between items-center px-10 pt-5 relative z-10'>
                <Link to="/" className='text-2xl font-semibold tracking-wider text-neutral-800 flex items-center space-x-1 hover:text-neutral-600 transition-colors'>
                    <SiPlanetscale />
                    <div>KubeScale</div>
                </Link>
                <div className='hidden md:flex space-x-6 text-sm font-medium text-neutral-500'>
                    <Link to="/support" className='hover:text-neutral-800 transition-colors'>Support</Link>
                    <Link to="/terms" className='hover:text-neutral-800 transition-colors'>Terms</Link>
                    <Link to="/privacy" className='hover:text-neutral-800 transition-colors'>Privacy</Link>
                </div>
                <div className='flex space-x-4 justify-center items-center text-neutral-600'>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-blue-600 transition-colors'><TbBrandLinkedin /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-xl hover:text-black transition-colors'><VscGithub /></a>
                </div>
            </header>
        </>
    )
}

export default Navbar
