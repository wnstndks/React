import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// state변경하기 위해 만든 함수 import 해서 사용
import { changeName,changeAge } from "./../store.js";

function Cart() {
  // store에 있던 componente가져다쓰기
  let state = useSelector((state) => {
    return state;
  });
  console.log(state);

  // store.js로 요청을 보내주는 함수
  let dispatch = useDispatch()

  // useSelector 편하게 쓰려면 함수를 store안에 있던 모든 state가
  // 되기에, 어떤 state만 가져다 쓸지를 확실히 해야함 {}안에 원하는 것만 골라서 가져다 쓸수 있음

  // 컴포넌트간 공유가 필요없으면 그냥 useState() 쓰는게 좋음
  return (

    // Redux사용시 컴포넌트들이 props없이 state공유가능
    <div>
      <h6>{state.user.name}{state.user.age}의 장바구니</h6>
      <button onClick={()=>{
        dispatch(changeAge())
      }}>버튼</button>
      <Table>
        <thead>
          <tr>
            {/* tr은 행, th,td - 열 */}
            <th>#</th>
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
                <button onClick={()=>{
                  // dispatch를 붙여야 함수사용가능
                  dispatch(changeName())
                }}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
