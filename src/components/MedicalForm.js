import { useRef } from "react";
import { Container, Form, Col, Row, FloatingLabel, Button } from "react-bootstrap"

const MedicalForm = props => {
    const nameRef = useRef('');
    const desRef = useRef('');
    const priceRef = useRef('');

    const submitHandler = e => {
        e.preventDefault();
        props.onSubmit({
            name: nameRef.current.value,
            des: desRef.current.value,
            price: priceRef.current.value,
            id: Math.random()
        });
        nameRef.current.value = "";
        desRef.current.value = "";
        priceRef.current.value = "";
    }

    return <Container className="py-4">
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name@example.com" ref={nameRef}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Description"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name@example.com" ref={desRef}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Price"
                        className="mb-3"
                    >
                        <Form.Control type="number" placeholder="name@example.com" ref={priceRef}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <Button variant="outline-secondary" size="lg" type="submit">Button</Button>
                </Col>
            </Row>
        </Form>
    </Container>
}

export default MedicalForm;