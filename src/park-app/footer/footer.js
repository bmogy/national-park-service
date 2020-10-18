import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Row sm="2" xs="1" md="3" lg="3" xl="3">
                    <Col>

                    </Col>

                    <Col className="footer-block-02">
                        <h2>Conatct Info</h2>
                        <p>Phone #: 901-921-0458</p>
                        <address>
                            address: 248 village green drive
                            Nashville, tn 37017
                    </address>

                    </Col>
                    <Col className="footer-block-03">
                        <a title="twitter" href="https://twitter.com/"><img src="./assets/img/Twitter Logo.jpg" alt="Twitter"></img></a>
                        <a title="facebook" href="https://facebook.com"><img src="./assets/img/Facebook-Logo.png" alt="Facebook"></img></a>
                        <a title="linkedin" href="https://linkedin.com"><img src="./assets/img/linkedin-logo.png" alt="LinkedIn"></img></a>

                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default Footer