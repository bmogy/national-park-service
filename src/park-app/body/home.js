import React from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import "./home.css"
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="home">
            <div>
            <p>Since 1916, the National Park Service has been entrusted with the care of our national parks. With the help of volunteers and partners, we safeguard these special places and share their stories with more than 318 million visitors every year. But our work doesn't stop there.</p>
            <p>We are proud that tribes, local governments, nonprofit organizations, businesses, and individual citizens ask for our help in <a href="https://www.nps.gov/getinvolved/communities.htm"> revitalizing their communities</a>, preserving local history, celebrating local heritage, and creating close-to-home opportunities for kids and families to get outside, be active, and have fun.</p>
            <p>Taking care of the national parks and helping Americans take care of their communities is a job we love, and we need—and welcome—your help and support. </p>
            </div>
            <div>
                <h1>Our Mission</h1>
                <p> The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations. The Park Service cooperates with partners to extend the benefits of natural and cultural resource conservation and outdoor recreation throughout this country and the world.</p>
            </div>
            <div>
                <h1>Our Employees</h1>
                <p>Approximately 20,000 strong, the uncommon men and women of the National Park Service share a common trait: a passion for caring for the nation's special places and sharing their stories.</p>
                <ul>
                    <li>
                        <a href="https://www.nps.gov/aboutus/workwithus.htm">Work For us</a>
                    </li>
                    <li>
                        <a href="https://www.nps.gov/getinvolved/volunteer.htm">Volunterr With Us</a>
                    </li>
                    <li>
                        <a href="https://www.nps.gov/getinvolved/partner.htm">Our Partners</a>
                    </li>
                    <li>
                        <a href="https://www.nps.gov/subjects/npscelebrates/awards-recognition.htm">Awards and Recognition</a>
                    </li>
                </ul>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Home