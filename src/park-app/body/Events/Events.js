import React, { Component } from "react"
import Header from "../../header/header"
import Footer from "../../footer/footer"
import EventsDispayBlock from "./EventsDisplayBlock";
import { Container, Row } from "reactstrap"
import { v4 as uuidv4 } from "uuid"
class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsInfoBlock: [
                {
                    link: "https://www.nps.gov/aboutus/news/public-health-update.htm",
                    img: "./assets/img/flower.jpg",
                    title: "2019 Novel Coronavirus (COVID-19)",
                    description: "Learn about the National Park Service response to the coronavirus outbreak."
                },
                {
                    link: "https://www.nps.gov/subjects/npscelebrates/hispanic-heritage-month.htm",
                    img: "./assets/img/dancing.jpg",
                    title: "Hispanic Heritage Month",
                    description: "Celebrate history, heritage, and contributions of Hispanic and Latino Americans both past and present."
                },
                {
                    link: "https://www.nps.gov/subjects/forests/leaf-peeping.htm",
                    img: "./assets/img/stream.jpg",
                    title: "A Palette of Autumn Colors",
                    description: "Enjoy a colorful display of fall foliage with in-person and virtual leaf peeping trips at national parks."
                },
                {
                    link: "https://www.nps.gov/subjects/legal/great-american-outdoors-act.htm",
                    img: "./assets/img/outdooract.jpg",
                    title: "Great American Outdoor Act",
                    description: "The act, signed by President Trump on August 4, will permanently fund the Land and Water Conservation Fund and restore our national parks."
                },
                {
                    link: "https://www.nps.gov/articles/campfires.htm",
                    img: "./assets/img/campfire.jpg",
                    title: "Campfire Safety",
                    description: "With National Fire Week in October, be familiar with best practices to have a fun, safe campfire experience."
                },
                {
                    link: "https://www.nps.gov/articles/000/getaway-elmo.htm",
                    img: "./assets/img/mountains.jpg",
                    title: "This Month's National Park Getaway",
                    description: "Find a thousand years of history written in stone on the sandstone bluffs at El Morro National Monument in New Mexico."
                },
                {
                    link: "https://www.nps.gov/aboutus/news/index.htm",
                    img: "./assets/img/park-news.jpg",
                    title: "National Park News",
                    description: "Find the latest news and events, search for images and videos, and discover facts and figures about the national parks."
                },
                {
                    link: "https://www.nps.gov/media/multimedia-search.htm",
                    img: "./assets/img/webcam.jpg",
                    title: "Photos, Videos, Webcams & More",
                    description: "Explore the national parks through multimedia. Search for photos, videos, webcams, and audio files on any topic."
                }

            ]
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Container>
                    <Row xs="1" sm="1" md="2" lg="3" xl="3">
                        {this.state.eventsInfoBlock.map((infoBlock) => {
                            return <EventsDispayBlock
                                key={uuidv4()}
                                img={infoBlock.img}
                                title={infoBlock.title}
                                description={infoBlock.description}
                                link={infoBlock.link}
                            ></EventsDispayBlock>
                        })}
                    </Row>
                </Container>

                <Footer></Footer>

            </div>
        )
    }
}
export default Events