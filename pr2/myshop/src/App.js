import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data";

function App() {
  let [shoes, setShoes] = useState(data);
  let [title, setTitle]=useState(0);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MyMusinsa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">profile</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
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
      <div style={{"height" : "500px"}}></div>
    </div>
  );
}

function Modal(props) {
  return(
  <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.title+1}.jpg`} width="100%" />
    <h4>{props.shoes[props.title].title}</h4>
    <p>{props.shoes[props.title].price}</p>
  </div>
  );
}
export default App;
