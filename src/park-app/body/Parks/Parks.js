import React, { Component } from "react"
import Header from "../../header/header"
import Footer from "../../footer/footer"
import {v4 as uuidv4} from "uuid"
import ParkInfo from "./parkInfo"
import {Container,Row} from "reactstrap"
import "./Parks.css"

class Parks extends Component {
    state = {
        apikey: "1ErS7ogehFE5r5z4Zw6JQAoUfkMY5054WAg6l2va",
        npsUrl: "https://developer.nps.gov/api/v1/",
        states: [" ","Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Conneticut", "Deleware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "MASSACHUSETTS", "Michigan", "Minnesota", "Mississippii", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Caralina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Caralina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        stateCodes: ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"]
    }
    selectOptions = (e) => {
        e.preventDefault()
        const usState = e.target.value
         const returnPromice = new Promise((resolve, reject) => {
            const fetchedParkInfo = fetch(this.state.npsUrl + "parks/?api_key=" + this.state.apikey + "&q=" + usState)
            if (fetchedParkInfo === undefined || fetchedParkInfo === 0) {
                 reject("There is a problem with the search parameter")
            } else {
                 resolve(fetchedParkInfo)
            }
        })
        return returnPromice
    }
    ParkData = (e) => {
        this.selectOptions(e).then((data)=> {
            return data.json()
        }).then((data) => {
            this.setState({
                stateParks:data.data
            })
        })
    }
    render() {
       const parks = this.state.stateParks ? this.state.stateParks.map((park)=> {
            return <ParkInfo 
            name={park.fullName}
            description={park.description}
            image={park.images.map((img) => {
                return < img className="stateParkImg" src={img.url} alt={img.altText} title={img.title} key={uuidv4()}></img>
            })}
            addresses ={park.addresses.map((address) => {
                return <div>
                    <p>{address.line1}</p>
            <p>{address.line2}</p>
            <p>{address.line3}</p>
            <p>{address.city},{address.stateCode} {address.postalCode}</p>
                </div>
            })}
            hours={park.operatingHours.map((hour) => {
                return <div>
            <h3>{hour.name}</h3>
           <h3>{hour.description}</h3>
           <h2>Hours:</h2>
                <ul>
                    <li>Sunday: {hour.standardHours.sunday}</li>
                    <li>Monday: {hour.standardHours.monday}</li>
                    <li>Tuesday:{hour.standardHours.tuesday}</li>
                    <li>Wednesday:{hour.standardHours.wednesday}</li>
                    <li>Thursday: {hour.standardHours.thursday}</li>
                    <li> Friday:{hour.standardHours.friday}</li>
                    <li>Saturday:{hour.standardHours.saturday}</li>
                </ul>
                </div>
                
                })}
                
                email= {park.contacts.emailAddresses[0].emailAddress ===undefined ?  "" : park.contacts.emailAddresses[0].emailAddress}
                phone={park.contacts.phoneNumbers[0].phoneNumber ===undefined ? " " : park.contacts.phoneNumbers[0].phoneNumber }
            ></ParkInfo>
        }) : " "
        return (
            
            <div>>
                <Header></Header>
                <select selected onChange={this.ParkData}>
                    {this.state.states.map((state) => {
                        return <option key={uuidv4()} value={state}>{state}</option>
                    })}
                </select>
                <Container>
                <Row sm="1" xs="1" md="2" lg="2" xl="1">
                 {parks}
                </Row>
                </Container>
                <Footer></Footer>
          </div>
        )
    }
}
export default Parks