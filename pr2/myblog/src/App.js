import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  // 변수를 html에 꽂아넣을 때는 중괄호
  let data = "강남 우동 맛집";

  // useState('보관할 자료')_state에 자료를 잠깐 저장할 수 있음
  let [글제목, b] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <br />
          <button className="bt-name">이름변경</button>
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
