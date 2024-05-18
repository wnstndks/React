import { useParams } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";

function Musinsa(props) {
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 10000);
  }, []);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning" style={{"backgroundColor":"#F0F8FF","color":"#007bff","border":"none","border-radius":"10px","height":"100px","lineHeight":"70px"}}>첫 주문시 무탠다드 무료 제공</div>
      ) : null}
    </div>
  );
}

export default Musinsa;
