import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  // store에 있던 componente가져다쓰기
  let state = useSelector((state) => {
    return state.data;
  });
  console.log(state);

  // useSelector 편하게 쓰려면 함수를 store안에 있던 모든 state가
  // 되기에, 어떤 state만 가져다 쓸지를 확실히 해야함 {}안에 원하는 것만 골라서 가져다 쓸수 있음

  // 컴포넌트간 공유가 필요없으면 그냥 useState() 쓰는게 좋음
  return (
    // Redux사용시 컴포넌트들이 props없이 state공유가능
    <div>
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
          <tr>
            <td>{state[0].id}</td>
            <td>{state[0].name}</td>
            <td>{state[0].count}</td>
          </tr>
          <tr>
            <td>{state[1].id}</td>
            <td>{state[1].name}</td>
            <td>{state[1].count}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
