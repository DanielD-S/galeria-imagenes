import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Col, Row} from "react-bootstrap";

import Encabezado from './components/Header';
import Cards from './components/Card';
import Footer from './components/Footer';


function App() {
  return (

    <div className='box'>
      <Encabezado title="Galería de Imágenes con React"></Encabezado>
      <Row>
        <Col>
        <Cards imagen="https://cdn.pixabay.com/photo/2015/11/15/04/42/dog-1043992_960_720.jpg" title="Perrito" description="Perrito Chihuahua" 
      ></Cards>
        </Col>
        
        <Col>
        <Cards imagen="https://cdn.pixabay.com/photo/2018/05/27/12/41/dog-3433414_960_720.jpg" title="Perrito" description="Perrito Chihuahua Tomando Sol" 
      ></Cards>
        </Col>
        <Col>
        <Cards imagen="https://cdn.pixabay.com/photo/2015/11/08/06/20/dog-1033155_960_720.jpg" title="Perrito" description="Perrito Chihuahua Gorrito" 
      ></Cards>
        </Col>
      </Row>
      <div>
        <Footer description="Todos los derechos reservados @2022"></Footer>
    </div>
    </div>
    


  );
}

export default App;
