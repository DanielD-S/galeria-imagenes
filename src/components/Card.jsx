import { Card, Button } from 'react-bootstrap';
const Cards = (props) => {
    return (
        <div>
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={props.imagen}
                />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <Button variant="primary">Ver más</Button>
                </Card.Body>
                </Card>
        </div>
    )

}

export default Cards;