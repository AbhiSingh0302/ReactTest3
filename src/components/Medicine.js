import { ListGroup, Badge, Button } from "react-bootstrap";

const Medicine = props => {
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
    <Button variant="outline-secondary">Add To Cart</Button>
    </div>
  </ListGroup.Item>
}

export default Medicine;