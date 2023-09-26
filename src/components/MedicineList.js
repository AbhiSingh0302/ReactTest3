import { Container, ListGroup } from "react-bootstrap";
import Medicine from "./Medicine";

const MedicineList = props => {

    return <Container>
        <ListGroup as="ol" numbered>
        {props.list.map(item => (
            <Medicine key={item.id} name={item.name} des={item.des} price={item.price} id={item.id}/>
        ))}
    </ListGroup>
    </Container>
}

export default MedicineList;