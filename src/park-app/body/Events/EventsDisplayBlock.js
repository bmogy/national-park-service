import React from "react"
import {Col} from "reactstrap"


const EventsDispayBlock =(props) => {
return (
    <Col>
    <a href={props.link}>
        <img src={props.img} alt="There is a problem with the img"></img></a>
        <a href={props.link}>
        <h2>{props.title}</h2></a>
        <p>{props.description}</p>
     
    </Col>
)
}
export default EventsDispayBlock