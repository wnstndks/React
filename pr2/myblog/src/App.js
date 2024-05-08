import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  // 변수를 html에 꽂아넣을 때는 중괄호
  let data = "강남 우동 맛집";

  // useState('보관할 자료')_state에 자료를 잠깐 저장할 수 있음
  let [글제목, 글제목변경]=useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [좋아요,좋아요변경]=useState(0);

  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
        <button className="bt-name" onClick={()=>{
          let copy=[... 글제목];
          copy.sort()
          글제목변경(copy)
        }}>가나다순 정렬 버튼</button>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}
          <br />
          <span style={{'cursor':'pointer'}} onClick={()=>{좋아요변경(좋아요+1)}}>👍</span> {좋아요}
          <button className="bt-name" onClick={()=>{
            // array, object 자료를 다룰 때는 원본 데이터를 직접 조작하는 것보다는 기존값은 보존해주는 식으로 코드짜는게 좋은 관습
            let copy= [...글제목];
            copy[0]='여자 코트 추천';
            글제목변경(copy)
          }}>이름변경</button>
        </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>

    </div>
  );
}

export default App;
