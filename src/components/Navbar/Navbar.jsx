
import {Link} from "react-scroll"
const Navbar = () => {

    const navLinks = <>
        <li><Link to="/" spy={true} smooth={true} offset={-50} duration={500} ec15><i className="uil uil-estate"></i>Home</Link></li>
        <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500} ><i className="uil uil-file-alt"></i>Skills</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500} ><i className="uil uil-chart-bar"></i>Projects</Link></li>
        <li><Link to="contacts" spy={true} smooth={true} offset={-100} duration={500} ><i className="uil uil-message"></i>Contacts</Link></li>
        <li><Link to="education" spy={true} smooth={true} offset={-100} duration={500} ><i className="uil uil-award-alt"></i>Education</Link></li>
        <li><Link to="experience" spy={true} smooth={true} offset={-100} duration={500} ><i className="uil uil-user-circle"></i>Experience</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} ><i className="uil uil-user"></i>About</Link></li>

    </>

    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a
                        className="btn btn-ghost normal-case text-xl"
                        style={{
                            fontSize: '24px',
                            color: '',
                            fontWeight: 'bold',
                            fontStyle: 'italic', 
                        }}
                    >
                        Razib Das
                    </a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end" >
                    <a className="btn" >Contacts</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;