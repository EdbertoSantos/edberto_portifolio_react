import { Link } from "react-router-dom";

import '../css/Navbar.css'

import logoNavBar from "../IMG/LogoWHI.png"

const Navbar = () => {
    return (
        <nav>
            <header className="Header-op">
                <ul className="Header-Links">
                    <img src={ logoNavBar } alt="logo" className="Header-Links-IMG" />
                        <li className="Header-Links-Unit"><Link to="/edberto_portifolio_react">// INÍCIO</Link></li>
                        <li className="Header-Links-Unit"><Link to="/edberto_portifolio_react/Projetos">// PROJETOS</Link></li>
                        <li className="Header-Links-Unit"><Link to="/edberto_portifolio_react/Experiencia">// EXPERIÊNCIAS</Link></li>
                        <li className="Header-Links-Unit"><Link to="/edberto_portifolio_react/Habilidades">// HABILIDADES</Link></li>
                        <li className="Header-Links-Unit"><Link to="/edberto_portifolio_react/Contatos">// CONTATO</Link></li>
                </ul>
            </header>
        </nav>
    )
}

export default Navbar;