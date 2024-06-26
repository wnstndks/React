import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName,addCount } from "./Store.js";

function Cart() {
  let a = useSelector((state) => {
    return state;
  });
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  // store.js로 요청보내주는 함수
  return (
    <Table>
      <thead>
        <tr>
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
              <button
                onClick={() => {
                  dispatch(addCount(a.id)) 
                }}
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Cart;
