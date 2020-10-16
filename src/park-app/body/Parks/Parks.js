import React, { Component } from "react"
import Header from "../../header/header"
import Footer from "../../footer/footer"
class Parks extends Component {
    state = {
        apikey: "1ErS7ogehFE5r5z4Zw6JQAoUfkMY5054WAg6l2va",
        npsUrl: "https://developer.nps.gov/api/v1/",
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Conneticut", "Deleware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "MASSACHUSETTS", "Michigan", "Minnesota", "Mississippii", "Missouri", "Montana", "Nebraska", "Nevada", "New Hamshire", "New Jersey", "New Mixico", "New York", "North Caralina", "North Dakota", "Ohio", "Oklahoma", "Oregan", "Pennsylvania", "Rhode Island", "South Caralina", "South Dakota", "Tennesseee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        stateCodes: ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"]
    }
    selectOptions = (e) => {
        const state = e.target.value
         new Promise((resolve, reject) => {
            const fetchedParkInfo = fetch(this.state.npsUrl + "parks/?api_key=" + this.state.apikey + "&q=" + state)
            if (fetchedParkInfo === undefined || fetchedParkInfo === 0) {
                reject("There is a problem with the search parameter")
            } else {
                resolve(fetchedParkInfo)
            }
        }).then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <div>
                <Header></Header>
                <select onChange={this.selectOptions}>
                    {this.state.states.map((state) => {
                        return <option value={state}>{state}</option>
                    })}

                </select>
                <Footer></Footer>
            </div>
        )
    }
}
export default Parks