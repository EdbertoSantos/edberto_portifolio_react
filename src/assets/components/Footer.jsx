import { Link } from "react-router-dom";

import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className="Pezinho">
            <Link to="" className="">
                <div className="center-con">

                    <div className="round">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </Link>
            <Link to="" className="Pezinho-cima">
                <div className="center-con">

                    <div className="round">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </Link>
        </footer>
    );
};

export default Footer;