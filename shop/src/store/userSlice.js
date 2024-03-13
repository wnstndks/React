import {createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    // useState와 비슷한 역할
    // name:'state이름',
    // initialState : '실제state의값'
  
    name:'user',
    initialState:{name: 'kim',age:20},
  
    // Redux의 state 변경하는법 - state 수정해주는 함수만들고
    // 원할 때 그 함수 실행해달라고 store.js에 요청
    reducers : {
      changeName(state){
        // 위의 state 수정하는 함수 - 작명은 내맘대로
        // return {name:'park',age:20}
        // array나 object의 경우 직접 수정해도 state 변경됨
        state.name='park'
      }, changeAge(state,action){
        // 함수의 파라미터 쓰면 비슷한 함수 쓸수 잇음
        state.age+=action.payload
      }
      // 함수1(){}
    }
  })

export default user
export let {changeName,changeAge} = user.actions