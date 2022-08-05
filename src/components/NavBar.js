import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className = "navbar">
            <h1>Roberto's Cleaning Business Schedule</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/quote">AddHouse</Link>

            </div>
        </nav>
    );
}
 
export default NavBar;