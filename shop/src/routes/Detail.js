import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

// App->detail 컴포넌트에 데이터 전송
function DetailCard(props) {
  // 유저가 URL파라미터에 입력한거 가져오려면 useParams()
  // 유저가 :id 자리에 적은거 가져와줌
  let {id}=useParams();
  
  // 현재 URL에서 입력한 번호와 같은 번호를 가진 상품을 찾음
  let 찾은상품 = props.shoes.find((x)=>{
    return x.id == id
  });

  // 복사본을 하나 만들어내면 관리하기 매우 힘들기에 데이터는 한곳에만 잘 보관
  // URL 파라미터에 이상한거 입력하면? - if문 사용
  return (
      <Container>
        <Row>
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${찾은상품.id}.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            {/* []안에는 현재url에 입력한 숫자가 들어가야 함 */}
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </Row>
      </Container>
    );
  }

  export default DetailCard