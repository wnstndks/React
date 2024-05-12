import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data";

function App() {
  let [shoes, setShoes] = useState(data);

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
          {shoes.map((a, i) => {
            return (
              <div className="col-md-4" key={i}>
                <img
                  src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`}
                  width="80%"
                />
                <h4>{a.title}</h4>
                <p>{a.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Modal(props) {
  <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </div>;
}
export default App;
