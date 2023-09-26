import { useContext } from 'react';
import Modal from '../UI/Modal';
import { cartContext } from '../store/CartContext';
import { Badge, ListGroup } from 'react-bootstrap';

const Cart = props => {
    const cartCtx = useContext(cartContext);

    return <Modal onClose={props.onClose}>
        <h1 className='text-center'>Cart Items</h1>
    <ListGroup as="ol" numbered>
        {cartCtx.products.map(item => (
            <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={item.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              {item.des}
            </div>
            <div className="me-5">
            <h3>
            <Badge bg="primary">
              Rs {item.price}
            </Badge>
            </h3>
            </div>
            <div>
            <h3>
            <Badge bg="primary">
              {item.quantity}
            </Badge>
            </h3>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
    </Modal>
}

export default Cart;