import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { useState } from "react";
// 경로는 무조건 ./ 부터
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // 길고 복잡한 데이터들은 다른 js파일에 빼둘수 있음
  let [shoes] = useState(data);

  // 페이지 나누는 법(리액트)
  // 컴포넌트 만들어서 상세페이지 내용 채움
  // 누가/detail 접속하면 그 컴포넌트 보여줌
  // react-router-dom 라이브러리 쓰기(라우팅)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 페이지 이동버튼은 <Link> */}

      <Routes>
        {/* 라우트라는 컴포넌트는 페이지를 의미 */}
        {/* 페이지또한 컴포넌트로 만들면 좋음 */}
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map(function (a, i) {
                    return (
                      <Col>
                        <img
                          src={`https://codingapple1.github.io/shop/shoes${
                            i + 1
                          }.jpg`}
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
          }
        />
        {/* 누가 /로 접속할때 element안에 들어있는걸 보여줌 */}
        <Route path="/detail" element={<div>상세페이지임</div>} />
        {/* 누가 /detail로 접속할때 element안에 들어있는걸 보여줌 */}
      </Routes>
    </div>
  );
}

// function Card(props) {
//   return (
//     <Col>
//       <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
//       <h4>{props.shoes[0].title}</h4>
//       <p>{props.shoes[0].price}</p>
//     </Col>
//   );
// }

export default App;
