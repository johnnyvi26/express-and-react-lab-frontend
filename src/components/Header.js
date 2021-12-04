import { Link } from "react-router-dom";

function Header(props) {
    //inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return(
        <header>
            <h1 className="title">Johnny's Portfolio</h1>
            <nav style={navStyle}>
                <Link to='/'>
                    <div>HOME/About</div>
                </Link>
                <Link to='/projects'>
                    <div>Projects</div>
                </Link>
                <Link to='/resume'>
                    <div>Resume</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
