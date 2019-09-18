import React from 'react';
import './styles/RespuestaSUNAT.css'

function RespuestaSUNAT(props) {

    if (!props.consultado) {
        return(
            null
        );
    } else {
        if (Object.keys(props.RSunat).length === 1) {
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Respuesta:</td>
                                <td>{props.RSunat.Respuesta}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return(
                <div className="cuerpoforms">
                    <table>
                        <tbody>
                            <tr>
                                <th id="fila1">Resultado de la Busqueda:</th>
                                <th id='fila2'>{props.RSunat.Respuesta}</th>
                            </tr>
                            <tr>
                                <td id="fila1">Cliente:</td>
                                <td className='columnab'>{props.RSunat.Cliente}</td>
                            </tr>
                            <tr>
                                <td id="fila1">Codigo Ubigeo:</td>
                                <td className='columnab'>{props.RSunat.Cod_Ubigeo}</td>
                            </tr>
                            <tr>
                                <td id="fila1">Direccion:</td>
                                <td className='columnab'>{props.RSunat.Direccion}</td>
                            </tr>
                            <tr>
                                <td id="fila1">Condicion Cliente:</td>
                                <td className='columnab'>{props.RSunat.Nom_CondicionCliente}</td>
                            </tr>
                            <tr>
                                <td id="fila1">Estado Cliente:</td>
                                <td className='columnab'>{props.RSunat.Nom_EstadoCliente}</td>
                            </tr>
                            <tr>
                                <td id="fila1">Tipo de documento:</td>
                                <td className='columnab'>{props.RSunat.Nom_TipoDoc}</td>
                            </tr>
                            <tr>
                                <td id="fila1">Numero de documento:</td>
                                <td className='columnab'>{props.RSunat.Nro_Documento}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default RespuestaSUNAT;