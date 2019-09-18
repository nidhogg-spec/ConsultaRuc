import React from "react";
import './styles/estilosfooter.css';
import twiterlogo from './img/twiterlogo.png'
import facebooklogo from './img/facebooklogo.png'

function Footer(){
    return(
        <footer className="footer">
            <h2 className='titulo'>Mayor informacion</h2>
            <div className="flex-footer">
                <div>
                    <p>Informacion de Contacto:</p>
                    <ul>
                        <li>Urb. Marcavalle E-20</li>
                        <li>Wanchaq - Cusco</li>
                        <li>M. +51 998551190</li>
                        <li>C. +51 94607893</li>
                    </ul>
                </div> 
                <div>
                    <p>Redes Sociales:</p>
                    <div className="flex-redes">
                        <div><img src={twiterlogo}/></div>
                        <div><img src={facebooklogo}/></div>
                    </div>
                </div>        
            </div>
        </footer>
    )

}

export default Footer;