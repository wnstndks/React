import { useParams } from "react-router-dom";
import styled from 'styled-components';
import styles from "./Detail.module.css";

function Detail(props) {
  let { id } = useParams();

  let 찾은상품 = props.shoes.find((x) => {
    return x.id == id;
  });

  console.log(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`}
            width="100%"
          />
        </div>
        <div className={`col-md-6 ${styles.mybox}`}>
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.description}</p>
          <p>{찾은상품.price} 원</p>
          <button className={`btn btn-danger ${styles.orderbutton}`}>주문하기</button>
        </div>
      </div>
      
    </div>
  );
}

export default Detail;
