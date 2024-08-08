import React from "react"

import '../css/Contatos.css'

const Contatos = () => {
    return (
        <div>
            <section className="Contacts" id="CONTATO">
                <div className="Contacts-infos">
                    <div className="Contacts-infos-Ed">
                        <h1>Desenvolvedor</h1>
                        <br></br>
                        <h4>Edberto Santos</h4>
                        <br></br>
                        <a href="https://www.linkedin.com/in/edberto-santos-dev/" target="_blankk" rel=""><p>Linkedin</p></a>
                        <a href="https://github.com/EdbertoSantos" target="_blank" rel=""><p>Github</p></a>
                        <a href="https://www.instagram.com/edberto.s.f/" target="_blank" rel=""><p>Instagram</p></a>
                    </div>
                    <div className="Contacts-infos-Karen">
                        <h1>Design</h1>
                        <br></br>
                        <h4>Karen Sofia</h4>
                        <br></br>
                        <a href="https://www.linkedin.com/in/karen-fernandes-612ba62b0/" target="_blank" rel=""><p>Linkedin</p></a>
                        <a href="https://entr.ai/kadizaini" target="_blank" rel=""><p>Entr.ai</p></a>
                        <a href="https://www.instagram.com/kadizainii_/" target="_blank" rel=""><p>instagram</p></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contatos;