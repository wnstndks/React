import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  // 변수를 html에 꽂아넣을 때는 중괄호
  let data = "강남 우동 맛집";

  // useState('보관할 자료')_state에 자료를 잠깐 저장할 수 있음
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [글제목2,글제목변경2]= useState([
      "나의 코트 추천",
      "강남 라면 맛집",
      "REACT 독학",
    ]
  );

  let [title,setTitle]=useState(0);

  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [count, setCount] = useState(1);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
        <button
          className="bt-name mycursor plus"
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy);
          }}
        >
          가나다순 정렬 버튼
        </button>
      </div>
      {글제목.map((a,i) => {
        return (
          <div className="list" key={i}>
            <h4>
              <span
                className="mycursor"
                onClick={() => {
                  setCount(count + 1);
                  count % 2 != 0 ? setModal(true) : setModal(false);
                  setTitle(i);
                }}
              >
                {글제목[i]}
              </span>
              <br />
              <span
                className="mycursor"
                onClick={() => {
                  let copy=[...좋아요];
                  copy[i]+=1
                  좋아요변경(copy);
                }}
              >
                👍
              </span>{" "}
              {좋아요[i]}
              <button
                className="bt-name mycursor"
                onClick={() => {
                  // array, object 자료를 다룰 때는 원본 데이터를 직접 조작하는 것보다는 기존값은 보존해주는 식으로 코드짜는게 좋은 관습
                  let copy = [...글제목];
                  let copy2 =[...글제목2];
                  copy[i] = copy2[i];
                  글제목변경(copy);
                }}
              >
                이름변경
              </button>
            </h4>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}
      {modal == true ? <Modal title={title} 글제목={글제목}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>제목: {props.글제목[props.title]}</h4>
      <p>날짜: </p>
      <p>상세내용: </p>
    </div>
  );
}

export default App;
