import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar">
            <span className="brand">Mini Activity</span>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar;