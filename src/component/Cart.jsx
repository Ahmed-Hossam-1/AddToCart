import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decressItem,
  incressItem,
  removeItem,
} from "../features/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = carts.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  return (
    <>
      <h1>Cart</h1>
      <Button
        className="mb-3"
        onClick={() => dispatch(clearCart())}
        variant="danger"
      >
        Clear Cart
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td style={{ textAlign: "center" }}>
                <Button
                  onClick={() => dispatch(decressItem(item))}
                  variant="danger"
                  className="me-2"
                >
                  -
                </Button>
                <Button
                  onClick={() => dispatch(incressItem(item))}
                  variant="success"
                  className="me-2"
                >
                  +
                </Button>
                <Button
                  onClick={() => dispatch(removeItem(item))}
                  variant="danger"
                >
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total Price: {Math.ceil(totalPrice)}$</h4>
    </>
  );
};

export default Cart;
