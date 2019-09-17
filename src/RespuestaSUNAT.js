import React from 'react';
import './RespuestaSUNAT.css'

function RespuestaSUNAT(props) {

    if (!props.consultado) {
        return(
            <label>Ruc no consultado</label>
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
                                <td>Respuesta:</td>
                                <td>{props.RSunat.Respuesta}</td>
                            </tr>
                            <tr>
                                <td>Cliente:</td>
                                <td>{props.RSunat.Cliente}</td>
                            </tr>
                            <tr>
                                <td>Codigo Ubigeo:</td>
                                <td>{props.RSunat.Cod_Ubigeo}</td>
                            </tr>
                            <tr>
                                <td>Direccion:</td>
                                <td>{props.RSunat.Direccion}</td>
                            </tr>
                            <tr>
                                <td>Condicion Cliente:</td>
                                <td>{props.RSunat.Nom_CondicionCliente}</td>
                            </tr>
                            <tr>
                                <td>Estado Cliente:</td>
                                <td>{props.RSunat.Nom_EstadoCliente}</td>
                            </tr>
                            <tr>
                                <td>Tipo de documento:</td>
                                <td>{props.RSunat.Nom_TipoDoc}</td>
                            </tr>
                            <tr>
                                <td>Numero de documento:</td>
                                <td>{props.RSunat.Nro_Documento}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default RespuestaSUNAT;