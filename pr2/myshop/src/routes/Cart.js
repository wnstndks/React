import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount} from "./Store.js";
import {changeName, addAge} from '../store/userSlice.js'

function Cart() {
  // Redux store 가져옴
  // let a = useSelector((state) => {
  //   return state;
  // });
  // useSelector 편하게 쓰려면 store안에 있던 모든 state를 빼기에 state.원하는거 를 가져올 수 있음 그리고 중괄호랑 return은 생략가능
  let state = useSelector((state) => state);
  // store.js로 요청보내주는 함수- useDispatch()
  let dispatch = useDispatch();
  return (
    <div>
      <h6>{state.user.age}살인 {state.user.name}의 장바구니</h6>
      <button style={{border:'none'}} onClick={()=>{
        dispatch(addAge(10))
      }}>나이먹는 버튼</button>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(a.id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
