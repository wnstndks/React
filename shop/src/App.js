import logo from "./logo.svg";
// css 파일 작명할 때 다른것에 오염방지하려면 컴포넌트명.module.css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { createContext, useEffect, useState } from "react";
// 경로는 무조건 ./ 부터
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailCard from "./routes/Detail.js";
// ajax axios 불러오기
import axios from "axios";

// Cart.js 불러오기
import Cart from "./routes/Cart.js";

// contextAPI를 쓰면 자식은 props없이 state 사용가능 1.createContext() 2. <Context>로 원하는 컴포넌트 감싸기
// export let Context1 = createContext();

function App() {


  //  코드짜는법이란? 한글먼저 쓰고 코드로 옮김 - 상세히 설명할수록 코딩잘하는 것
  useEffect(()=>{
    localStorage.setItem('watched',JSON.stringify([]))
  },[])
  // 사이트 재접속시에도 데이터유지되게 만들려면 localStorage

  // // array/object 저장하려면 JSON으로 바꾸면 됨 -JSON은 그냥 object에 따옴표 쳐진것
  // let obj ={name:'kim'}
  // localStorage.setItem('data',  JSON.stringify(obj)) //object->json 
  // let 꺼낸거 =localStorage.gettItem('data')
  // console.log(JSON.parse(꺼낸거)) //JSON->object



  // 길고 복잡한 데이터들은 다른 js파일에 빼둘수 있음
  let [shoes, setShoes] = useState(data);

  // 페이지 이동도와주는 useNavigate() - 함수가 들어가있음
  let navigate = useNavigate();

  // let [재고] = useState([10, 11, 12]);

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
                        <a href={`detail/${a.id}`}>
                          {" "}
                          <img
                            src={`https://codingapple1.github.io/shop/shoes${
                              i + 1
                            }.jpg`}
                            width="80%"
                            alt={a.title}
                          />
                        </a>

                        <h4>{a.title}</h4>
                        <p>{a.price}</p>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
              {/* ajax 쓰려면 택1 XMLHttpRequest, fetch(), axios*/}
              <button
                onClick={() => {
                  // ajax를 이용한 GET요청은 axios.get('url')
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      // 가져온 데이터들을 shoes라는 state에 추가
                      let copy = [...shoes, ...결과.data];
                      setShoes(copy);
                    })
                    // 동시에 ajax 요청 여러개 하려면
                    // Promise.all([axios.get('/url1'),axios.get('/url1')])
                    // 파라미터를 추가하면 실제로 서버에서 가져온 데이터
                    // ajax요청 실패할 경우
                    // 원래 서버와는 문자만 주고 받을 수 있지만 따옴표쳐놓을시 array나 object도 주고 받을 수 있음-JSON데이터
                    // fetch로도 가져올수 있지만 변환을 직접해주어야 함 그래서 axios를 사용

                    .catch((e) => {
                      console.log(e);
                    });
                }}
              >
                더보기
              </button>
            </div>
          }
        />
        {/* 누가 /로 접속할때 element안에 들어있는걸 보여줌 */}
        {/* 페이지 여러개 만들고 싶으면 :URL 파라미터 써도 됨 */}
        {/* /detail/아무거나 라는 뜻 => 상세페이지 수백만개 만들 수 있음, 파라미터 만들때 여러개 가능 */}
        {/* id라는 값에 고유 키값이 들어가야된다는 뜻 아닌가? */}
        <Route
          path="/detail/:id"
          element={
            // ContextProvider - {}로 감싼것들은 props없이도 가져다 쓸수 있음
            <DetailCard shoes={shoes} />
          }
        />

        {/* 누가 /detail로 접속할때 element안에 들어있는걸 보여줌 */}
        <Route path="*" element={<div>없는 페이지</div>} />
        {/* 없는 페이지 */}

        {/* 장바구니 페이지 만들기 */}
        <Route path="/detail/:id" element={<DetailCard shoes={shoes} />} />

        {/* <Route path="/cart" element={<Cart/>}/> */}
        <Route path="/cart" element={<Cart />} />
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
