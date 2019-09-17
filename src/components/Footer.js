import React from "react";
import './styles/estilosfooter.css';

function Footer(){
    return(
        <footer className="footer">
            <h2 className='titulo'>iFacturacion</h2>
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
                            <div class="flex-redes">
                                <div>abc</div>
                                <div>bca</div>
                                <div>acb</div>
                            </div>
                    </div>        
            </div>
        </footer>
    )

}

export default Footer;