import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

/* classname들을 styled-compoents 쓰면 JS파일에서 전부해결가능 */
// let YellowBtn = styled.button`
//   background: yellow;
//   color: black;
//   padding: 10px;
// `;

// let Box = styled.div`
//   background: grey;
//   paddding: 20px;
// `;

// 컴포넌트의 Lifecycle
//  페이지에 장착되기도 하고(mount)
//  가끔 업데이트도 되고(update) 필요없으면 제거되고 (unmount)
// class Detail2 extends React.Component{
//   componentDidMount(){ => 컴포넌트가 장착될때(로드될때)

//   }
//   componentDidUpdate(){ =>컴포넌트 업데이트

//   }
//   componentWillUnmount(){ => 컴포넌트 삭제

//   }
// }

// App->detail 컴포넌트에 데이터 전송
function DetailCard(props) {
  // 컴포넌트에 갈고리 다는법
  // useEffect 안에 있는 코드는 랜더링이 되고 나서(html이 다 그려지고 나서) 나중에 실행이됨 - 위에서 임포트 안에는 함수 쓰기
  // 안에 적은 코드는 detailcomponent가 처음장착또는 업데이트될때 실행해줌
  // useEffect안에 적는 코드들은 어려운 작업 및 서버에서 데이터가져오는 작업, 타이머 장착하는 것일때 useEffect안에 넣음
  // side Effect: 함수의 핵심기능과 상관없는 부가기능
  useEffect(() => {
    // 업데이트는 재랜더링과 똑같은 말
    // 여기적은 코드는 컴포넌트 로드 & 업데이트마다 실행됨
    // mount update 시 코드 실행
    // 업데이트란 재렌더링임
    console.log("안녕");
  });

  let [count, setCount] = useState(0);

  // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  // 유저가 :id 자리에 적은거 가져와줌
  let { id } = useParams();

  // 현재 URL에서 입력한 번호와 같은 번호를 가진 상품을 찾음
  let 찾은상품 = props.shoes.find((x) => {
    return x.id == id;
  });
  let [alert, setAlert] = useState(true);

  // 타이머 - 주는 법 : setTimeout(()=>{실행할코드},1000), 1000은 1초

  useEffect(() => {
    setTimeout(() => {
      // 스위치 조작해주세요 - 리액트 방식 UI 상태 저장할 state 만들고 state 따라서 UI가 어떻게 보일지 작성
      setAlert(false);
    }, 2000);
    
    return()=>{
      // 이 안의 코드들은 useEffect 동적전에 실행됨
      //  - clean up function - 기존코드 지울때 많이 사용함 - 초기화 작업해주는거 같은데?
      // clearTimeout(a)
      // 기존 타이머는 제거해주세요 

      // 기존 데이터요청은 제거해주세요~할때도 사용

      // clean up functiondms mount시 실행안됨, unmount시 실행됨
    }

    // useEffect 실행조건 넣을수 있는 곳은 [] -dependencey
    // dependency를 추가하면 안에 넣은 변수가 변할 때마다 실행이됨
    // dependency가 없을 떄는 컴포넌트 mount시 일회만 실행하고 싶을 떄 사용
  },[]);

  // useEffect(()=>{}) 1.재렌더링마다 코드 실행하고 싶다.
  // useEffect(()=>{},[]) 2.mount시 1회 코드실행하고 싶으면 
  // useEffect(()=>{
    // 3.unmount시 1회 코드실행하고 싶을때
  // },[]) 
  //4. useEffect 실행전에 뭔가 실행하려면 언제나 return()=>{}



  let [input, setInput] = useState(true);

  // 복사본을 하나 만들어내면 관리하기 매우 힘들기에 데이터는 한곳에만 잘 보관
  // URL 파라미터에 이상한거 입력하면? - if문 사용
  return (
    <Container>

      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {/* <Box>
        <YellowBtn>버튼</YellowBtn>
      </Box> */}
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
        {input == true ? (
        <input></input>
      ) : null}
      </Row>
    </Container>
  );
}

export default DetailCard;
