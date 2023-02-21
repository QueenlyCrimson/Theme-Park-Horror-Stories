import { NavLink } from "react-router-dom"

const NavBar = (props) => {
  return (
    <div className="navbar">
      <h1>Horror Park</h1>
      <div>
        <NavLink to="/" className="navlink">
          HOME
        </NavLink>
        <NavLink to="/about" className="navlink">
          ABOUT
        </NavLink>
        <NavLink to="/createstory" className="navlink">
          ADD STORY
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar
