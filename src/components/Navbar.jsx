import "./Navbar.css";

function Navbar() {
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            <h2>Karishma joshi</h2>
            <ul>
                <li onClick={() => scrollTo("about")}>About</li>
                <li onClick={() => scrollTo("experience")}>Experience</li>
                <li onClick={() => scrollTo("skills")}>Skills</li>
                <li onClick={() => scrollTo("projects")}>Projects</li>
                <li onClick={() => scrollTo("contact")}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;