import React from "react";

import '../css/Habilidades.css'

const Habilidades = () => {
    return(
        <div>
           <section className="Habilits" id="HABILIDADES">
                <div className="Habilits-division">
                    <ul className="Habilits-Division-Title">
                        <li>//soft skills_</li>
                    </ul>
                    <ul className="Habilits-Division-Content">
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="Habilits-division">
                    <ul className="Habilits-Division-Title">
                        <li>//Linguagens_</li>
                    </ul>
                    <ul className="Habilits-Division-Content">
                        <li>HTML | CSS</li>
                        <li>Javascript</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="Habilits-division">
                    <ul className="Habilits-Division-Title">
                        <li>//Formação_</li>
                    </ul>
                    <ul className="Habilits-Division-Content">
                        <li>ADS.</li>
                        <li>Logística.</li>
                        <li>I.A</li>
                    </ul>
                </div>
                
            </section> 
        </div>
    );
};

export default Habilidades;