import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
const Map = () => {
    return (
        <div>
            <GoogleMap defaultZoom={10} defaultCenter={{ lat: 36.090850, lng: -86.635820 }} />
            <Marker position={{ lat: 36.090850, lng: -86.635820 }}></Marker>
        </div>
    )
}
export default withScriptjs(withGoogleMap(Map))
