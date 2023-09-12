import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";

const Product = () => {
  const products = useSelector((state) => state.products);
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(carts);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div className="dis">
      {products.loadingProducts && !products.errorProducts && (
        <h1>Loading...</h1>
      )}
      {!products.loadingProducts && products.errorProducts && (
        <h1>Error: {products.errorProducts}</h1>
      )}
      {!products.loadingProducts &&
        !products.errorProducts &&
        products.products?.length > 0 &&
        products.products.map((product) => (
          <Card
            key={product.id}
            style={{ width: "20rem", height: "28rem", textAlign: "center" }}
          >
            <Card.Img className="imgee" variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title.slice(0, 20)}</Card.Title>
              <Card.Text>{product.description.slice(0, 100)}</Card.Text>
              <Card.Text>{product.price}$</Card.Text>
              <Button
                onClick={() => dispatch(addToCart(product))}
                variant="primary"
              >
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Product;
