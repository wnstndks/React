import { useParams } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import {addItem} from "./Store.js";
import { useDispatch } from "react-redux";

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [fade, setFade] = useState("");

  let dispatch=useDispatch();
  
  useEffect(() => {
    setFade("end");
  }, [탭]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  let { id } = useParams();

  let 찾은상품 = props.shoes.find((x) => {
    return x.id == id;
  });

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6" style={{ marginTop: "-70px" }}>
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width="100%"
            className={`${styles.shoesimage}`}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <div style={{ height: "100px" }} />

      <Nav variant="pills" defaultActiveKey="/link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            info1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            info2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent className={`${styles.start} ${styles.end}`} 탭={탭} />
    </div>
  );
}
function TabContent(props) {
  if (props.탭 === 0) {
    return <div>수정중</div>;
  }
  if (props.탭 === 1) {
    return <div>수정중2</div>;
  }
}
export default Detail;
