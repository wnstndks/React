import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from '../store/userSlice'
// redux 쓰는 이유
// 컴포넌트간 state 공유 편해짐


let stock= createSlice({
    name:'stock',
    initialState:[10,11,12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
  ],
  reducers : {
    addCount(state, action){
      let 번호= state.findIndex((a)=>a.id==action.payload)
      state[번호].count++
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
}) 
export let {addCount,addItem} = cart.actions

export default configureStore({
  reducer: { 
    // 작명 : state이름.reducer
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 