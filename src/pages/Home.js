import React from 'react';
import logopale from '../components/img/logopale.png'
import imgexpress from '../components/img/express.png'
import imgreact from '../components/img/react.png'
import imgjscrip from '../components/img/jscrip.png'
import imgfacebook from '../components/img/facebooklogo.png'
import imgtwt from '../components/img/twiterlogo.png'
import imginstagram from '../components/img/insta.png'
import '../components/styles/Home.css'

class App extends React.Component {
  render() {
  return (
    <section>
        <section id="header">
          <div id="headerlogo">
              <img className="logo" src={logopale} alt="logo"></img>
          </div>
          <div id="hero">
              <p class="frase1">
                  Desarrollo y Producción de Software
              </p>
              <p class="frase2" id="color-uno">
                  "7 años en desarrollo de software a medida"
              </p>
          </div>
        </section>
        <section id="cuerpo">
        </section>
        <section id="final">
        <div className="flex-container">                       
                <div id="cuadrado" class="flex-web">
                    <div>
                        <h3>Aplicaciones WEB</h3>
                    </div>
                    <div className="flex-apps">
                        <div>
                            <img src={imgexpress} alt="express"/>
                        </div>
                        <div>
                        <img src={imgreact} alt="react"/>
                        </div>
                        <div>
                        <img src={imgjscrip} alt="jscrip"/>
                        </div>
                    </div>
                    <div>
                        <p id="Subtitulo">Especificaciones</p> 
                    </div>
                    <div id="lista-web">
                        <ul>
                        <li>1 especificacion</li>
                        <li>2 especificacion</li>
                        <li>3 especificacion</li>
                        <li>4 especificacion</li>
                        </ul>
                    </div>
                    <div id="enlace">
                        <a href="#">Conoce mas</a>
                    </div>
                </div>

                <div id="cuadrado" className="flex-web">
                    <div>
                        <h3>Aplicaciones MOVIL</h3>
                    </div>
                    <div className="flex-apps">
                        <div>
                            <img src={imgexpress} alt="express"/>
                        </div>
                        <div>
                            <img src={imgreact} alt="react"/>
                        </div>
                        <div>
                            <img src={imgjscrip} alt="jscrip"/>
                        </div>
                    </div>
                    <div>
                        <p id="Subtitulo">Especificaciones</p> 
                    </div>
                    <div id="listaweb">
                        <ul>
                        <li>a especificacion</li>
                        <li>b especificacion</li>
                        <li>c especificacion</li>
                        <li>d especificacion</li>
                        </ul>
                    </div>
                    <div id="enlace">
                        <a href="#">Conoce mas</a>
                    </div>
                </div>
            </div>
            <div className="flex-footer">
                    <div>
                            <p>Informacion de Contacto:</p>
                            <ul>
                              <li>Urb. Marcavalle E-20</li>
                              <li>Wanchaq - Cusco</li>
                              <li>M. +51 998551190</li>
                              <li>T. +51 94607893</li>
                            </ul>
                    </div>   
                    <div>
                            <p>Productos:</p>
                            <ul>
                              <li>Aplicaciones WEB</li>
                              <li>Aplicaciones MOVIL</li>
                              <li>Aplicaciones DESKTOP</li>
                              <li>Facturacion electronica</li>  
                            </ul>
                    </div>  
                    <div>
                            <p>Redes Sociales:</p>
                            <div class="flex-redes">
                                <div>
                                <img src={imgfacebook} alt="facebook"/>
                                </div>
                                <div>
                                <img src={imginstagram} alt="instagram"/>
                                </div>
                                <div>
                                <img src={imgtwt} alt="twt"/>
                                </div>
                            </div>
                    </div>                
            </div>
        </section>
    </section>
  );
  }
}

export default App;
