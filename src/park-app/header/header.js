import React from "react"
import {NavLink} from "react-router-dom"
import "./header.css"
const Header = () => {
    return (
        <div className="header-container">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </div>
    )
}
export default Header