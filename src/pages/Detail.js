import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header.js";
import { useParams } from "react-router-dom";
import { addItem } from "../store.js";
import { useDispatch } from "react-redux";

function Detail(props) {
  let dispatch = useDispatch();
  let { id } = useParams();

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className="detail">
            <img src={"/img/tent" + [id] + ".jpg"} />
            <h4>{props.tent[id].title}</h4>
            <p>{props.tent[id].price}원</p>
            <Button variant="success">구매 하기</Button>
            <Button
              className="material-symbols-outlined"
              variant="outline-dark"
              onClick={() => {
                dispatch(
                  addItem({
                    id: props.tent[id].id,
                    name: props.tent[id].title,
                    count: props.tent[id].count,
                  })
                );
              }}
            >
              shopping_cart
            </Button>
          </Col>
        </Row>
        <div className="title"></div>
        <div className="description">
          <img src={"/img/description" + [id] + ".jpg"} />
        </div>
      </Container>
    </>
  );
}

export default Detail;
