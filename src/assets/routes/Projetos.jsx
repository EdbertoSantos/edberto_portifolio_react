import { Link } from "react-router-dom";
import { useState } from "react";

import calcIMC from "../IMG/calcIMC.png"
import clickSAUDE from "../IMG/clickSAUDE.png"
import calc from '../IMG/calc.png'
import Modal from "../components/Modal.jsx"

import '../css/Projetos.css'

const Projetos = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <section className="Project" id="PROJETOS">
                <div className="Project-Space">
                    <h1 className="Project-Space-Title">Projetos!</h1>
                    <nav className="Project-Space-Nav">
                        <ul className="Project-Space-Nav-Ul">
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to='' onClick={() => { setOpenModal(true)}}>
                                    <img src={calcIMC} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to='' onClick={() => { setOpenModal(true) }}>
                                    <img src={clickSAUDE} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">
                                <Link to='' onClick={() => { setOpenModal(true) }}>
                                    <img src={calc} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                        </ul>
                        {openModal && <Modal closeModal={setOpenModal} />}
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Projetos;