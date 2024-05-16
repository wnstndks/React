import logo from "./logo.svg";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import {useState, useEffect} from 'react';
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import About from "./routes/About.js";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(`.${styles.main_bg}`).classList.add(styles.main_bg2);
    }, 5000);
  
    setTimeout(() => {
      document.querySelector(`.${styles.main_bg2}`).classList.add(styles.main_bg3);
    }, 10000);
  }, []);

  return (
    <div className={`${styles.App}`}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">MyMusinsa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/event/one">Event1</NavDropdown.Item>
                <NavDropdown.Item href="/event/two">Event2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
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
                    return <Modal shoes={shoes} title={i}></Modal>;
                  })}
                </div>
              </div>
              <button
                className={`${styles.btn} ${styles["btn-jelly"]} ${styles["btn-fill"]} ${styles["btn-open"]} ${styles["btn-open-line"]}`}
                onClick={() => {
                  let copy = [...shoes];
                  copy.sort((a, b) => a.title.localeCompare(b.title));
                  console.log(copy);

                  setShoes(copy);
                }}
              >
                상품명 정렬하기
              </button>
              <button className={`${styles.mybutton}`}
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      console.log(결과.data);
                      let copy=[... data, ...결과.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패함");
                    });
                }}
              >
                버튼
              </button>
              <div style={{ height: "500px" }}></div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/event" element={<About />}>
          <Route path="one" element={<div>첫 주문시 무탠다드 무료 제공</div>} />
          <Route path="two" element={<div>회원가입 감사 쿠폰받기</div>} />
        </Route>
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
