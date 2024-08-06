import { Link } from "react-router-dom";

import React from "react"

import imagenProjetos from "../IMG/LogoWHI.png"

import '../css/Projetos.css'

const Projetos = () => {
    return (
        <div>
            <section className="Project" id="PROJETOS">
                <div className="Project-Space">
                    <h1 className="Project-Space-Title">Projetos!</h1>
                    <nav className="Project-Space-Nav">
                        <ul className="Project-Space-Nav-Ul">
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="Project-Space-Nav">
                        <ul className="Project-Space-Nav-Ul">
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="Project-Space-Nav">
                        <ul className="Project-Space-Nav-Ul">
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to="">
                                    <img src= {  imagenProjetos  } alt="Projetos-IMG" className="Header-Links-IMG" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Projetos;