// Navigation Bar code

// Import as needed
import { NavLink } from "react-router-dom";

// Function to diplay Navigation Bar
function NavBar() {
    return (
        <nav>
            <NavLink to="/" activeClassName="active" >Home Page</NavLink>
            <NavLink to="/characters" activeClassName="active" >Browse Characters</NavLink>
            <NavLink to="/comics" activeClassName="active" >Comics</NavLink>
            <NavLink to="/wrong-page" activeClassName="active" >Wrong Page</NavLink>
        </nav>
    )
}

// Export
export default NavBar;