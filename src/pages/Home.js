import React from 'react';
import FormConsulta from '../components/FormConsulta';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <FormConsulta></FormConsulta>
      <Footer></Footer>
    </div>
  );
}

export default App;
