import React from 'react';
import RespuestaSUNAT from './RespuestaSUNAT';
import './styles/FormConsulta.css';
import Recaptcha from "react-recaptcha";

class FormConsulta extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isverified: false};
        
        this.state = { ruc: "", mostrar: false, respuesta: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubscribe= this.handleSubscribe.bind(this);
        this.recaptchaload=this.recaptchaload.bind(this);
        this.verifyCallback=this.verifyCallback.bind(this);
        this.consultarRUC = this.consultarRUC.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        this.setState({mostrar:false})

    }
    
    consultarRUC(e) {
        if(this.state.isverified){
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
                    this.setState({isverified:false})
                })
                .catch(error => {
                    console.error('Error:', error)
                    this.setState({mostrar: false});
                    
                });
        } 
    }
    handleSubscribe(){
        if(this.state.isverified){
           
        }else{
            alert("confirma que eres humano");
        }
    }
    recaptchaload(){
        console.log('captcha loaded');
    }
    verifyCallback(responsecallback){
        if(responsecallback){
            this.setState({
                isverified: true
            })
        }
    }
    render() {
    const muestra=this.state.mostrar; 

        return(
            <div className = "formulario">
                <section id="Cuerpo">
                    <form className="formulario2" method="GET" onSubmit={this.consultarRUC}>
                        <label className="ruc" htmlFor="ruc">RUC: </label>
                        <input className="inputtext" type="text" name="ruc" id="ruc" placeholder="Ingrese su RUC" onChange={this.handleChange} value={this.state.ruc} autoComplete="off"></input>
                        <button className="boton" type="submit" onClick={this.handleSubscribe}>Consulta</button>
                    </form>
                    <div className='captchacss'>
                        {!muestra ? <Recaptcha
                            onloadCallback={this.recaptchaload}
                            verifyCallback={this.verifyCallback}
                            sitekey='6LfAAbkUAAAAAIb6TruJFJxi5sBA7NR3OGXmnbou'  
                            render = 'explicit'
                        /> : null}
                    </div>
                    <RespuestaSUNAT 
                        consultado={this.state.mostrar} 
                        RSunat={this.state.respuesta}>
                    </RespuestaSUNAT>
                </section>
            </div>
        );
    }
}

export default FormConsulta;