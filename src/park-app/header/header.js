import React from "react"
import {NavLink} from "react-router-dom"
import "./header.css"
const Header = () => {
    return (
        <div className="header-container">
            <ul>
                <li><NavLink to="/" exact={true}>Home</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
            </ul>
        </div>
    )
}
export default Header