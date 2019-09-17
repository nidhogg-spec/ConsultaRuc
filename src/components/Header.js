import React from 'react';
import './styles/estilosheader.css'
import imgsunat from './img/imgsunat.png'

function Header() {
    return(
        <header className="header">
            <div className="flex-header">
                <div><h1>Consulta con tu numero de RUC</h1></div>
                <div><img src={imgsunat}></img></div>
                <div><h3>"Rapido, Ligero y Seguro"</h3></div>
            </div>
        </header>
    );
}

export default Header;