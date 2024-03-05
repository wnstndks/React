// 원인 메세지 없애기
/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //  자료 잠깐 저장할 때 변수, state문법 사용
  let posts = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  // 글제목을 쓰면 남자 코트 추천이 나옴
  // 변수는 변경되면 html에는 자동으로 변경이 안되는 반면 state는 자동 재렌더링됨
  let logo = "ReactBlog";

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  // 두번째는 state변경함수 - html 재랜더링도 잘됨
  // state변경함수(새로운state)

  // 형식은 자유 - 모달창상태 표현만 가능하면 됨
  let [modal, setModal] = useState([true, false]);

  let [title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState("");

  // map 사용법 - 1 . 어레이 자료 갯수만큼 함수안의 코드 실행해줌
  // 2. 함수의 파라미터는 array안에 있던 자료임
  // return에 뭐 적으면 array로 담아줌

  // [1,2,3].map(function(){
  //   console.log(1)
  // })

  return (
    // return 안에는 병렬로 태그 2개 이상 금지
    <div className="App">
      <div className="black-nav">
        <div>{logo}</div>
      </div>

      <button
        onClick={() => {
          // state변경함수 조건 -기존 state와 신규를 비교해 같다 하면 state 변경을 해주지 않음
          // array/object 조건 -

          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          // state를 수정하고 싶으니 state 변경함수를 사용
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>

      {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        // map()으로 같은 html 반복생성하는 법
        // a : 어레이안에 있는 파라미터, i는 반복문 돌 떄마다 0부터 1씩 증가하는 함수

        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  setModal(!modal);
                  setTitle(i);
                }}
              >
                {a}
                <span
                  onClick={() => {
                    let 새따봉 = [...따봉];
                    새따봉[i] = 따봉[i] + 1;
                    따봉변경(새따봉);
                  }}
                >
                  👍
                </span>
                {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button
                onClick={() => {
                  let copy = [...글제목];
                  // copy 여기서 원하는 자료 삭제
                  copy.splice(i, 1);
                  글제목변경(copy);
                }}
              >
                삭제
              </button>
            </div>
          );
        })
      }

      {/* input에 입력한 값 가져오는법 - e(이벤트 객체) 사용 */}
      {/* state 변경함수는 늦게처리됨 */}
      <input
        onChange={(e) => {
          // 내가 입력한 값이 글제목에 반영이 되도록할거야
          // console.log(e.target.value)
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (입력값 !== "") {
            let update = [...글제목];
            // update 맨처음에 유저가 입력한 글 추가
            update.unshift(입력값);
            글제목변경(update);
          }else{
            alert('값을 입력해라')
          }
        }}
      >
        글발행
      </button>

      {/* 브라우저 같은 경우 새로고침시 html js 파일 다시 읽어서 새로고침하면 없어지는 것 */}
      {/* 만든 컴포넌트를 태그형식으로 원하는 곳에 넣으면 됨 */}
      {
        // 조건문 대신 삼항연산자
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        // null은 비어있는 html용으로 자주 사용
        modal == true ? (
          <Modal
            color={"yellow"}
            title={title}
            글제목={글제목}
            글수정={() => {
              let copy = [...글제목];
              copy[0] = "여자 코트 추천";

              글제목변경(copy);
            }}
          />
        ) : null
      }
      {/* <Modal2></Modal2> */}
      {/* 동적인 UI 만드는 step
      1. html css로 미리 디자인 완성 2. UI의 현재상태를 state로 저장 3. state에 따라 UI가 어떻게 보일지 작성 */}
    </div>
  );
}



// 한번에 보게 할수 있음 -Component
// 1. function 만들기 2.return()안에 html 담기 3. <함수명></함수명>쓰기
// 다른 function 밖에 만들기 + 영어대문자
function Modal(props) {
  return (
    // return 소괄호 안에는 항상 하나의 태그로 시작해 하나의 태그로 끝나야된다. 두개의 태그 병렬 정렬x
    // 부모 컴퍼넌트인 App에서 자식 컴퍼넌트 Modal로 state를 전송할수 있음- props이용

    // 부모 -> 자식 state 전송방법
    // 부모에서 <자식컴포넌트 작명={state이름}>
    // 자식컴포넌트에 props 파라미터 등록후 props.작명 사용
    // props전송은 부모->자식만 가능

    <div className="modal" style={{ background: props.color }}>
      {/* 저 title state가 0이면 첫번째, 1이면 2번째 */}
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
  )

  // A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸수 없음
  // 컴포넌트 쓸 때 1.반복적인 것 2.큰덩어리
}

// 클래스 문법으로 컴포넌트 생성가능 - 몰라도 됨
// class Modal2 extends React.Component{
//   // 클래스 문법이란 변수랑 함수를 많이 보관할수 있는 함수
//   constructor(props){
//     super(props)
//     // state
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }
  
//   render(){
//     return(
//       <div>안녕 {this.state.name}
//         <button onClick={()=>{
//           this.setState({age:21})
//         }}>버튼</button>
//       </div>
//     )
//   }
// }





export default App;
