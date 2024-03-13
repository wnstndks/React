// Redux 세팅시 store.js 파일을 생성해야 함
import { configureStore, createSlice } from '@reduxjs/toolkit'


// Redux쓰는 이유 - 컴포넌트간 state 공유 편해짐 - props 전송이 편해짐

// Redux store에 store 보관하는 법
let user = createSlice({
  // useState와 비슷한 역할
  // name:'state이름',
  // initialState : '실제state의값'

  name:'user',
  initialState:'kim'

})

let stock = createSlice({
  name:'stock',
  initialState:[10,11,12]

})

let data = createSlice({
  name:'data',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})


export default configureStore({
  reducer: { 
    // 여기에 등록해야 사용가능
    user : user.reducer,
    stock : stock.reducer,
    data : data.reducer,

  }
}) 