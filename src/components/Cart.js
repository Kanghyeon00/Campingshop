import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./../store.js";
import Header from "./Header.js";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>
      <Header />
      <Table className="cart">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(increase(state.cart[i].id));
                    }}
                    variant="outline-dark"
                  >
                    ▲
                  </Button>
                  <span className="num">{state.cart[i].count}</span>
                  <Button
                    onClick={() => {
                      dispatch(decrease(state.cart[i].id));
                    }}
                    variant="outline-dark"
                  >
                    ▼
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="orderContainer">
        <Button variant="success">주문 하기</Button>
      </div>
    </>
  );
}

export default Cart;
