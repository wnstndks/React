import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

/* classname들을 styled-compoents 쓰면 JS파일에서 전부해결가능 */
let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  paddding: 20px;
`;

// 컴포넌트의 Lifecycle 
//  페이지에 장착되기도 하고(mount) 
//  가끔 업데이트도 되고(update) 필요없으면 제거되고 (unmount)
// class Detail2 extends React.Component{
//   componentDidMount(){
    
//   }
//   componentDidUpdate(){
    
//   }
//   componentWillUnmount(){
    
//   }
// }

// App->detail 컴포넌트에 데이터 전송
function DetailCard(props) {


  // 컴포넌트에 갈고리 다는법 
  // useEffect 안에 있는 코드는 나중에 실행이됨
  useEffect(()=>{
    // 업데이트는 재랜더링과 똑같은 말
    // 여기적은 코드는 컴포넌트 로드 & 업데이트마다 실행됨
    // mount update 시 코드 실행
    console.log('안녕')
  })


  for (var i=0; i<1000;i++){
    console.log(1);

  }
  let [count, setCount] = useState(0)



  // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  // 유저가 :id 자리에 적은거 가져와줌
  let { id } = useParams();

  // 현재 URL에서 입력한 번호와 같은 번호를 가진 상품을 찾음
  let 찾은상품 = props.shoes.find((x) => {
    return x.id == id;
  });

  // 복사본을 하나 만들어내면 관리하기 매우 힘들기에 데이터는 한곳에만 잘 보관
  // URL 파라미터에 이상한거 입력하면? - if문 사용
  return (
    <Container>

      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <Box>
        <YellowBtn>버튼</YellowBtn>
      </Box>
      <Row>
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${찾은상품.id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          {/* []안에는 현재url에 입력한 숫자가 들어가야 함 */}
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </Row>
    </Container>
  );
}

export default DetailCard;
