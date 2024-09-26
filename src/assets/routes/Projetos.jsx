import { Link } from "react-router-dom";
import { useState } from "react";

import calcIMC from "../IMG/calcIMC.png"
import clickSAUDE from "../IMG/clickSAUDE.png"
import calc from '../IMG/calc.png'
import Modal from "../components/Modal.jsx"
import ia from "../IMG/hacktonIA.png"

import '../css/Projetos.css'

const Projetos = () => {

    const [openModal, setOpenModal] = useState(false)
    const [modalFrameProject, setModalFrameProject] = useState('')
    const [modalFrameReadMe, setModalFrameReadMe] = useState('')
    const [modalFrameLink, setModalFrameLink] = useState('')

    const handleOpenModal = (frameProject, frameReadMe, frameLink) => {
        setModalFrameProject(frameProject);
        setModalFrameReadMe(frameReadMe);
        setModalFrameLink(frameLink)
        setOpenModal(true);
    };

    return (
        <div>
            <section className="Project" id="PROJETOS">
                <div className="Project-Space">
                    <h1 className="Project-Space-Title">Projetos!</h1>
                    <nav className="Project-Space-Nav">
                        <ul className="Project-Space-Nav-Ul-Destaque"> {/*Destaque*/}
                            <li className="Project-Space-Nav-Ul-Li-Destaque">    {/**/}
                                <Link to='' onClick={() => { handleOpenModal('', 'src/assets/pdfs/imc.pdf', '', '') }}>
                                    <img src={ia} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                        </ul>
                        <ul className="Project-Space-Nav-Ul"> {/*Html, css e Js*/}
                            <li className="Project-Space-Nav-Ul-Li">    {/*Calculadora Imc*/}
                                <Link to='' onClick={() => { handleOpenModal('https://edbertosantos.github.io/Calculadora_Imc/', 'src/assets/pdfs/imc.pdf', 'https://github.com/EdbertoSantos/Calculadora_Imc?tab=readme-ov-file') }}>
                                    <img src={calcIMC} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">    {/*Click Saude*/}
                                <Link to='' onClick={() => { handleOpenModal('https://edbertosantos.github.io/click-saude/', 'src/assets/pdfs/clicksaude.pdf', 'https://github.com/EdbertoSantos/click-saude') }}>
                                    <img src={clickSAUDE} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                            <li className="Project-Space-Nav-Ul-Li">    {/*Calculadora*/}
                                <Link to='' onClick={() => { handleOpenModal('https://edbertosantos.github.io/calculadora/', 'src/assets/pdfs/calculadora.pdf', 'https://github.com/EdbertoSantos/calculadora') }}>
                                    <img src={calc} alt="Projetos-IMG" className="Projetos-Img" />
                                </Link>
                            </li>
                        </ul>
                        <ul className="Project-Space-Nav-Ul">
                        </ul>
                        {openModal && <Modal closeModal={setOpenModal} frameProject={modalFrameProject} frameReadMe={modalFrameReadMe} frameLink={modalFrameLink} />}
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Projetos;