import logo from "./logo.svg";
// css 파일 작명할 때 다른것에 오염방지하려면 컴포넌트명.module.css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { useState } from "react";
// 경로는 무조건 ./ 부터
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailCard from "./routes/Detail.js";

function App() {
  // 길고 복잡한 데이터들은 다른 js파일에 빼둘수 있음
  let [shoes] = useState(data);

  // 페이지 이동도와주는 useNavigate() - 함수가 들어가있음
  let navigate = useNavigate();

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
            <Nav.Link
              onClick={() => {
                // navgate안에 -1 또는 1을 누를시 뒤로가기 또는 앞으로 가기
                navigate("/");
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            {/* <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link> */}
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
                      <Col key={i}>
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
        {/* 페이지 여러개 만들고 싶으면 :URL 파라미터 써도 됨 */}
        {/* /detail/아무거나라는 뜻 => 상세페이지 수백만개 만들 수 있음, 파라미터 만들때 여러개 가능 */}
        {/* id라는 값에 고유 키값이 들어가야된다는 뜻 아닌가? */}
        <Route path="/detail/:id" element={<DetailCard shoes={shoes}/>} />

        {/* 누가 /detail로 접속할때 element안에 들어있는걸 보여줌 */}
        <Route path="*" element={<div>없는 페이지</div>} />
        {/* 없는 페이지 */}

        {/* Nested Routes - 여러 페이지 필요할때, 여러 유사한 페이지 필요할 때, */}

        {/* <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>} /> 
          {/* /about/member로 접속시 
          <Route path="location" element={<div>위치정보임</div>} />
        </Route> */}

        {/* <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route> */}
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

// function About() {
//   return (
//     <div>
//       <h4>회사정보임</h4>
//       {/* nested Router를 보여줄 자리는 Outlet이용 */}
//       <Outlet></Outlet>
//     </div>
//   );
// }

// function Event(){
//   return(
//     <div>
//       <h4>오늘의 이벤트</h4>
//       <Outlet></Outlet>
//     </div>
//   )
// }
export default App;
