import React from 'react';
import logopale from '../components/img/logopale.png'
import '../components/styles/Home.css'

class App extends React.Component {
  render() {
  return (
    <section className="homepage">
        <section id="header">
          <div id="headerlogo">
              <img className="logo" src={logopale} alt="logo"></img>
          </div>
          <div id="hero">
              <p className="frase1">
                  Desarrollo y Producción de Software
              </p>
              <p className="frase2" id="color-uno">
                  "7 años en desarrollo de software a medida"
              </p>
          </div>
        </section>
        <section id="cuerpo">
        </section>
        <section id="final">
        </section>
    </section>
  );
  }
}

export default App;
