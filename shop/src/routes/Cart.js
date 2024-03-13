import { Table } from "react-bootstrap";

function Cart() {
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
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
