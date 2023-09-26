import { ListGroup, Badge, Button } from "react-bootstrap";
import { useContext } from "react";
import { cartContext } from "../store/CartContext";

const Medicine = props => {
    const cartCtx = useContext(cartContext);

    const addToCart = () => {
        fetch(`https://crudcrud.com/api/${cartCtx.endPoint}/cart`,{
      method: 'POST',
      body: JSON.stringify({...props, quantity: 1}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
        cartCtx.addProduct({...props, quantity: 1});
    })
    .catch(err => {
      alert(err.message);
    })
    }
    
    return <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{props.name}</div>
      {props.des}
    </div>
    <div className="me-5">
    <h3>
    <Badge bg="primary">
      Rs {props.price}
    </Badge>
    </h3>
    </div>
    <div>
    <Button variant="outline-secondary" onClick={addToCart}>Add To Cart</Button>
    </div>
  </ListGroup.Item>
}

export default Medicine;