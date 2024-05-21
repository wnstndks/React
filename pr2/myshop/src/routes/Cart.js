import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let a = useSelector((state) => {
    return state;
  });
  let state = useSelector((state)=> state);
  
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
            <td>1</td>
            <td>{state.cart[i].name}</td>
            <td>{state.cart[i].count}</td>
            <td>안녕</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Cart;
