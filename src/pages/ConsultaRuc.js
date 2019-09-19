import React from 'react';
import FormConsulta from '../components/FormConsulta';
import Header from '../components/Header';
import Footer from "../components/Footer";

class ConsultaRuc extends React.Component {
  render() {
  return (
    <div className="App container">
      <Header></Header>
      <FormConsulta></FormConsulta>
      <Footer></Footer>
    </div>
  );
  }
}

export default ConsultaRuc;
