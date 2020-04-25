import React, { Component } from "react"
import { compose } from "recompose"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps"

const Map = compose(withScriptjs, withGoogleMap)(props => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 40.84, lng: 73.86}}

        />
    )
});

class MyGoogleMap extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default MyGoogleMap;
