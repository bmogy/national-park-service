import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.css"
import TwitterLogo from "../../assats/img/Twitter Logo.jpg"
import FacebookLogo from "../../assats/img/Facebook-Logo.png"
import LinkInLogo from "../../assats/img/linkedin-logo.png"
import Map from "../../assats/Map/Map"
const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Row sm="2" xs="1" md="3" lg="3" xl="3">
                    <Col style={{ height: "30vh", width: "100vw" }}>
                        <Map googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAYTw9xgh0-1tmmOO6myAO_P0RYZqPRNac&callback=initMap"}
                            loadingElement={<div style={{ height: "100%" }}></div>}
                            containerElement={<div style={{ height: "100%" }}></div>}
                            mapElement={<div style={{ height: "100%" }}></div>}
                        ></Map>

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
                        <a title="twitter" href="https://twitter.com/"><img src={TwitterLogo} alt="Twitter"></img></a>
                        <a title="facebook" href="https://facebook.com"><img src={FacebookLogo} alt="Facebook"></img></a>
                        <a title="linkedin" href="https://linkedin.com"><img src={LinkInLogo} alt="LinkedIn"></img></a>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default Footer