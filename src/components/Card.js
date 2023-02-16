import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";

function Card(props) {
  let navigate = useNavigate();

  return (
    <Col sm className="product">
      <img
        onClick={() => {
          navigate("/detail/" + props.i);
        }}
        src={"/img/tent" + props.i + ".jpg"}
        alt="product"
      />
      <h4>{props.tent.title}</h4>
      <p>{props.tent.price}원</p>
    </Col>
  );
}

export default Card;
