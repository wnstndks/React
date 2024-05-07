// let a = 10;

// export 하려면 export default 변수명
// export default a;

// export 여러개하려면 export{변수명1, 변수명2}
// import 여러개하려면 import {변수명1, 변수명2} from 경로

let data=[
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
  
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
  
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
] 

export default data;


// object란? 
// array안에는 여러개의 자료를 넣을수 있고 인덱싱을 통해서 원하는 자료를 꺼낼수 있음
// object 또한 여러개의 자료를 안에 넣을 수 있음, 그러나 array와의 차이점은 중괄호 안에 왼쪽에 자료 이름을 붙여 꼭 저장해야함
// 원하는 데이터의 경우 순서가 아닌 .자료이름 을 해주면 출력이 됨
