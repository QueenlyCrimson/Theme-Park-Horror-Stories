import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const NavBar = (props) => {
    return (
        <div className='navbar-container'>
            <h1 className='navbar-header'>HORROR PARK</h1>
            <div className='navlinks-container'>
                <NavLink to='/' className='navlink'>
                    HOME
                </NavLink>
                <NavLink to='/about' className='navlink'>
                    ABOUT
                </NavLink>
                <NavLink to='/app/createstory' className='navlink'>
                    ADD STORY
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar
