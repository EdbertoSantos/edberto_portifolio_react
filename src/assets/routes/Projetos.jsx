import { Link } from "react-router-dom";
import { useState } from "react";

import calcIMC from "../IMG/calcIMC.png"
import clickSAUDE from "../IMG/clickSAUDE.png"
import calc from '../IMG/calc.png'
import ia from "../IMG/hacktonIA.png"

import Modal from "../components/Modal.jsx"
import IMC from "../components/readMe/IMC.jsx";
import Calculadora from "../components/readMe/Calculadora.jsx"

import '../css/Projetos.css'

const Projetos = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalFrameProject, setModalFrameProject] = useState('');
    const [modalContent, setModalContent] = useState(null);

    const handleOpenModal = (frameProject, content) => {
        setModalFrameProject(frameProject);
        setModalContent(content);
        setOpenModal(true);
    };

    return (
        <div>
            <section className="Project" id="PROJETOS">
                <div className="Project-Space">
                    <h1 className="Project-Space-Title">Projetos!</h1>
                    <nav className="Project-Space-Nav">
                        <ul className="Project-Space-Nav-Ul-Destaque"> {/*Destaque*/}
                            <li className="Project-Space-Nav-Ul-Li-Destaque">
                                <Link to='' onClick={() => { handleOpenModal('', 'Destaque') }}>
                                    <img src={ia} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                        </ul>
                        <ul className="Project-Space-Nav-Ul"> {/*Html, css e Js*/}
                            <li className="Project-Space-Nav-Ul-Li">    {/*Calculadora Imc*/}
                                <Link to='' onClick={() => { handleOpenModal('https://edbertosantos.github.io/Calculadora_Imc/', <IMC />) }}>
                                    <img src={calcIMC} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">    {/*Click Saude*/}
                                <Link to='' onClick={() => { handleOpenModal('https://edbertosantos.github.io/click-saude/', <Calculadora />) }}>
                                    <img src={clickSAUDE} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">    {/*Calculadora*/}
                                <Link to='' onClick={() => { handleOpenModal('https://edbertosantos.github.io/calculadora/', <Calculadora />) }}>
                                    <img src={calc} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                        </ul>
                        {openModal && <Modal closeModal={setOpenModal} frameProject={modalFrameProject} modalContent={modalContent} />}
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Projetos;