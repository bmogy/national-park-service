import React from "react"
import { NavLink } from "react-router-dom"
import "./header.css"
const Header = () => {
    return (
        <div className="header-container">
            <ul className="a">
                <li className="header-li"><NavLink className="link" to="/" exact={true}>Home</NavLink></li>
                <li className="header-li"><NavLink className="link" to="/events">Events</NavLink></li>
                <li className="header-li"><NavLink className="link" to="/parks">Parks</NavLink></li>
            </ul>
        </div>
    )
}
export default Header