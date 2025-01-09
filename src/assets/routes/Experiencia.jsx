import React from "react"

import '../css/Experiencias.css'

//import curriculo from '../IMG/Curri.pdf'

const Experiencia = () => {
    return (
        <div>
            <section className="Expirience" id="EXPERIÊNCIAS">
                <div className="Experience-Space">
                    <div className="txt">
                        <h1>Currículo</h1>
                        <br></br>
                        <p>Nome : José Edberto Santos de França</p>
                        <p>idade : 20 | Nascimento : 05/10/2003</p>
                        <p>Residencia : Tabatinga, Camaragibe - PE</p>
                        <p>Sexo : Masculino | Nascionalidade : Brasileiro</p>
                        <br></br>
                        <br></br>
                        <h2>Experiências</h2><br></br>
                        <h3>Suporte têcnico - Effetive sistemas</h3>
                        <p>descrição: Receber e acompanhar chamados de forma proativa, triar chamados e resolver problemas técnicos de forma eficiente e eficaz // Março 2023 - Outubro 2023</p><br></br>
                        <h2>Formações</h2><br></br>
                        <h3>Graduação - Uninassau </h3>
                        <p>Formado em analíse e desenvolvimento de sistemas | Ano de conclusão : 2023</p><br></br>
                        <h3>Curso Técnico - Escola Técnica estadual Alcides Nascimento Lins</h3>
                        <p>Formado em Logística | Ano de conclusão : 2020</p><br></br>
                        <h3>Start+ - Rede cidadã</h3>
                        <p>Curso de Inteligencia Artificial | Ano de conclusão : Cursando</p>
                    </div>
                </div>
                <div className="Expirience-download">
                    <button className="Expirience-download-btn" >
                        <a href={curriculo} download={curriculo} rel="Edberto_santos_Curriculo" >
                            <p className="Expirience-download-btn-text">Download!</p>
                        </a>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Experiencia;