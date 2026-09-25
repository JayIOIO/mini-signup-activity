import { Link } from "react-router-dom";

function Homepage() {
    return(
        <div className="page">
            <h1>Welcome!</h1>
            <p>
                A mini React activity covering the routing, context, and a two-part sign-up form.
            </p>
            <Link to="/signup" className="btn btn-primary">
                Get Started
            </Link>
        </div>
    );
}

export default Homepage;