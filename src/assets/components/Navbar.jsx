import { Link } from "react-router-dom";

import '../css/Navbar.css'

import logoNavBar from '../IMG/LogoWHI.png'

const Navbar = () => {
    return (
        <nav>
            <header className="Header-op">
                <ul className="Header-Links">
                    <img src="{ logoNavBar }" alt="logo" className="Header-Links-IMG" />
                        <li className="Header-Links-Unit"><Link to="/">// INÍCIO</Link></li>
                        <li className="Header-Links-Unit"><Link to="/Projetos">// PROJETOS</Link></li>
                        <li className="Header-Links-Unit"><Link to="/Experiencia">// EXPERIÊNCIAS</Link></li>
                        <li className="Header-Links-Unit"><Link to="/Habilidades">// HABILIDADES</Link></li>
                        <li className="Header-Links-Unit"><Link to="/Contatos">// CONTATO</Link></li>
                </ul>
            </header>
        </nav>
    )
}

export default Navbar;