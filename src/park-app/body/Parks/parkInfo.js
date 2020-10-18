import React from "react"
import { Col, Container, Row } from "reactstrap"
const ParkInfo = (props) => {
    return (
        <Col>

            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div>
                {props.image}
            </div>
            <Container>
                <Row xs="1" sm="1" md="2" lg="2" xl="3">
                    <Col>
                        <div className="address">
                            <h2>Address:</h2>
                            {props.addresses}
                        </div>
                    </Col>
                    <Col>
                        <div className="hours">

                            {props.hours}
                        </div>
                    </Col>
                    <Col>
                        {props.email}
                        {props.phone}
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}
export default ParkInfo