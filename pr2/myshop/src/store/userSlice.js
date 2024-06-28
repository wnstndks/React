import { createSlice } from "@reduxjs/toolkit"


let user= createSlice({
    name:'user',
    initialState:{name: 'kim', age:20},

    // state 변경하려면
    // state 수정해주는 함수 만들고
    // 원할 때 그 함수 실행해달라고 store.js에 요청
    reducers:{
      // 함수명(){ 이런식으로 수정하라는 코드 }
      // 괄호 안의 state는 위에 있는 state를 의미
      changeName(state){
        return 'john'+state
      },

      // action - state변경함수
      addAge(state,action){
        state.age+=action.payload
      }
    }
})

// 만든 함수 export - {} 안에 임포트 하고 싶은 함수들 작성
export let { changeName,addAge } = user.actions 

// store/userSlice.js에 슬라이스 하나 보관하는 방식
export default user