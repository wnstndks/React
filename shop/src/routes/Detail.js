import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, Navbar, Nav, Col } from "react-bootstrap";
// store.js에서 함수가져오기
import { addItem } from "./../store";
import { useDispatch } from "react-redux";

// Context import
// import { Context1 } from "./../App.js";

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

  // state 사용은 useContext(Context)
  // let {재고, shoes}= useContext(Context1)
  
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

  let [탭, 탭변경] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      // 스위치 조작해주세요 - 리액트 방식 UI 상태 저장할 state 만들고 state 따라서 UI가 어떻게 보일지 작성
      setAlert(false);
    }, 2000);

    return () => {
      // 이 안의 코드들은 useEffect 동적전에 실행됨
      //  - clean up function - 기존코드 지울때 많이 사용함 - 초기화 작업해주는거 같은데?
      // clearTimeout(a)
      // 기존 타이머는 제거해주세요
      // 기존 데이터요청은 제거해주세요~할때도 사용
      // clean up functiondms mount시 실행안됨, unmount시 실행됨
    };

    // useEffect 실행조건 넣을수 있는 곳은 [] -dependencey
    // dependency를 추가하면 안에 넣은 변수가 변할 때마다 실행이됨
    // dependency가 없을 떄는 컴포넌트 mount시 일회만 실행하고 싶을 떄 사용
  }, []);

  // useEffect(()=>{}) 1.재렌더링마다 코드 실행하고 싶다.
  // useEffect(()=>{},[]) 2.mount시 1회 코드실행하고 싶으면
  // useEffect(()=>{
  // 3.unmount시 1회 코드실행하고 싶을때
  // },[])
  //4. useEffect 실행전에 뭔가 실행하려면 언제나 return()=>{}

  let [input, setInput] = useState(true);



  
  let dispatch=useDispatch()


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
          <button className="btn btn-danger"
          onClick={()=>{
            dispatch(addItem( {id : 1, name : 'Red Knit', count : 1} ))
          }}>주문하기</button>
        </div>
      </Row>
      {/* 탭 UI 만들기 1.html css로 미리 디자인 2. 탭 상태 저장해둘 state 필요 3.state에 따라 UI가 어떻게 보일지 작성*/}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/*  삼항연산자{
        탭 ==0 ? <div>내용0</div>:null
      }{
        
        탭 ==1 ? <div>내용1</div>:null
      }{
        
        탭 ==2 ? <div>내용2</div>:null
      } */}
      {/* props 싫으면 Context API 사용 근데 별로 사용하진 않음 */}
      <TabContent shoes={props.shoes} 탭={탭} />
    </Container>
  );
}

function TabContent({ 탭, shoes}) {

  // 일반 if조건문
  // if (탭 == 0) {
  //   return <div>내용0</div>
  // } if (탭 == 1) {
  //   return <div>내용1</div>
  // } if (탭 == 2) {
  //   return <div>내용2</div>
  // }

  //  전환애니메이션은  부착하면 애니메이션 나오는 className하나 만들고 원할 때 부착하면 됨
  // 1.애니메이션 동작 전 clasName만들기 2.  애니메이션 동작 후 className  만들기 3. className에 transition 속성 추가 4. 원할 때 2번 className 부착
  
  let [fade, setFade] = useState('')
  useEffect(()=>{
    // 리액트의 automatic batching 기능으로 인하여 한번에 다같이 바꿔주기에 시간차를 둬서 실행해야함
    setTimeout(()=>{setFade('end')},100)

    return ()=>{
      setFade('')
    }
  },[탭])

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default DetailCard;
