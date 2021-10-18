import { Link } from "react-router-dom";

function Footer(props) {

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return (
        <header>
            <h1>Additional Info </h1>
            <nav style={navStyle}>
                <a href="https://www.linkedin.com/in/johnny-villavicencio-nyc/">My Linkedin</a>
            </nav>
        </header>
    );
}

export default Footer;