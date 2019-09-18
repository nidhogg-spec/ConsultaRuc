import React from 'react';
import RespuestaSUNAT from './RespuestaSUNAT';
import './styles/FormConsulta.css';
import ReCAPTCHA from "react-google-recaptcha";

class FormConsulta extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ruc: "", mostrar: false, respuesta: {}};

        this.handleChange = this.handleChange.bind(this);
        this.consultarRUC = this.consultarRUC.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        this.setState({mostrar:false})
    }
    
    consultarRUC(e) {
        e.preventDefault();

        var url = new URL('http://consultaruc.hopto.org:3000/api/APadronSunat/consulta');
        var params = {ruc: this.state.ruc};

        url.search = new URLSearchParams(params);

        fetch(url)
            .then(res => res.json())
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
                console.log(Object.keys(response).length);
                
                this.setState({respuesta: response, mostrar: true});
            })
            .catch(error => {
                console.error('Error:', error)
                this.setState({mostrar: false});
            });
    }

    render() {
        return(
            <div className = "formulario">
                <section id="Cuerpo">
                    <form className="formulario2" method="GET" onSubmit={this.consultarRUC}>
                        <label className="ruc" htmlFor="ruc">RUC: </label>
                        <input className="inputtext" type="text" name="ruc" id="ruc" placeholder="Ingrese su RUC" onChange={this.handleChange} value={this.state.ruc}></input>
                        <button className="boton" type="submit">Consulta</button>
                    </form>
                    <ReCAPTCHA sitekey='http://consultaruc.hopto.org:3000/api/APadronSunat/consulta' render='explicit'></ReCAPTCHA>
                    <RespuestaSUNAT consultado={this.state.mostrar} RSunat={this.state.respuesta}></RespuestaSUNAT>
                </section>
            </div>
        );
    }
}

export default FormConsulta;