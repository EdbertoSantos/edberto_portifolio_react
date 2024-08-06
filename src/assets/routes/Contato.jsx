import { Link } from "react-router-dom";

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
                        <p>Edberto Santos</p>
                        <br></br>
                        <Link to=""><p>Linkedin</p></Link>
                        <Link to=""><p>Github</p></Link>
                        <Link to=""><p>Email</p></Link>
                    </div>
                    <div className="Contacts-infos-Karen">
                        <h1>Design</h1>
                        <br></br>
                        <p>Karen Sofia</p>
                        <br></br>
                        <Link to=""><p>Linkedin</p></Link>
                        <Link to=""><p>Entr.ai</p></Link>
                        <Link to=""><p>Gmail</p></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contatos;