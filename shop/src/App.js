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
          {shoes.map(function (a, i) {
            return (
              <Col>
                <img
                  src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
                  width="80%"
                />
                <h4>{a.title}</h4>
                <p>{a.price}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
