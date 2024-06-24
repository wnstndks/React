import logo from "./logo.svg";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import About from "./routes/About.js";
import Musinsa from "./routes/Musinsa.js";
import Cart from "./routes/Cart.js";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(1);
  let [button, setButton] = useState(false);

  return (
    <div className={`${styles.App}`}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: "bolder" }}>
            Musinsa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cart" style={{ fontWeight: "bold" }}>
                Cart
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                style={{ fontWeight: "bold" }}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/event/one">Event1</NavDropdown.Item>
                <NavDropdown.Item href="/event/two">Event2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                <div className={`${styles.main_bg}`}></div>
              </div>

              <div className={`container ${styles.container2}`}>
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Modal key={i} shoes={shoes} title={i}></Modal>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  console.log(shoes)
                  let copy=[...shoes.title]
                  console.log(copy)

                }}
              >
                상품명 정렬하기
              </button>
              <button
                className={`${styles.mybutton}`}
                onClick={() => {
                  setCount(count + 1);
                  console.log(count);
                  {
                    /* html에서 public 폴더 이미지 사용할땐 그냥/이미지경로 */
                    /* 나중에 사이트를 발행하고 싶을 때는 문제 없지만, 서브 경로에다 발행시에는 문제가 생길 수 있음.. */
                    /* 그래서 경로를 수정해야할수도 
                    따라서 밑의 경로처럼 쓰기 */
                    // {process.env.PUBLIC_URL+'/이미지 경로'}
                  }
                  if (count == 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((결과) => {
                        let copy = [...shoes, ...결과.data];
                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("실패함");
                      });
                  } else if (count == 2) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((결과2) => {
                        setButton(true);
                        let copy = [...shoes, ...결과2.data];
                        setShoes(copy);
                      })
                      .catch((e) => {
                        console.log("실패함");
                        console.log(e);
                      });
                  }
                }}
              >
                상품 더보기
              </button>
              <div style={{ height: "500px" }}></div>
            </div>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/event" element={<About />}>
          <Route
            path="one"
            element={<Musinsa element={(shoes = { shoes })} />}
          />
          <Route path="two" element={<div>회원가입 감사 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  );
}

function Modal(props) {
  const titleIndex = Number(props.title);

  return (
    <div className="col-md-4">
      <a href={`/detail/${titleIndex}`}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${titleIndex + 1}.jpg`}
          width="100%"
        />
      </a>
      <h4>{props.shoes[titleIndex].title}</h4>
      <p>{props.shoes[titleIndex].price}</p>
    </div>
  );
}

export default App;
