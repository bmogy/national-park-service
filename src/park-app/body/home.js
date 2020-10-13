import React from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import "./home.css"
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="home">
            <h1>Welcome to the home page</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Home