import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { useState } from "react";
// 경로는 무조건 ./ 부터
import data from "./data.js";

function App() {
  // 길고 복잡한 데이터들은 다른 js파일에 빼둘수 있음
  let [shoes] = useState(data);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
        <Modal shoes={shoes}/>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Modal(props) {
  return (
    <Col>
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].price}</p>
    </Col>
  );
}

export default App;
