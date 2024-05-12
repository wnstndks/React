import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data";

function App() {
  let [shoes, setShoes] = useState(data);
  let [title, setTitle]=useState(0);

  return (
    <div className="App">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MyMusinsa</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login"></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <div className="main-bg"></div>
      </div>
      <div className="container container2">
        <div className="row">
          {
            shoes.map((a, i) => {
            return (
              <Modal shoes={shoes} title={i}></Modal>
            );
          })
          }
        </div>
      </div>
    </div>
  );
}

function Modal(props) {
  return(
  <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.title+1}.jpg`} width="80%" />
    <h4>{props.shoes[props.title].title}</h4>
    <p>{props.shoes[props.title].price}</p>
  </div>
  );
}
export default App;
