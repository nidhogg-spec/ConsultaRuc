import React from 'react';
import './styles/estilosheader.css'
import logopale from './img/logopale.png'

function Header() {
    return(
        <header className="header">
            <div className="flex-header">
                <div><h1 className='htitulo'>iFacturacion</h1></div>
                <div><h3 className='hsubtitulo'>"Rapido, Ligero y Seguro"</h3></div>
                <div><img src={logopale}/></div>
            </div>
        </header>
    );
}

export default Header;