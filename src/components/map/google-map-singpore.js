import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
    position: { lat: 1.2854, lng: 103.8458 },
    map,
    title: "Hello World!",
  });
  return marker;
};

class GoogleMapSingpore extends Component {
  static defaultProps = {
    center: {
      lat: 1.2854,
      lng: 103.8458,
    },
    zoom: 17,
  };

  render() {
    return (
      <div style={{ width: "100%", height: "400px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDRZMcND0yOvYhRP98MWI4Shn9MvXfOAS4",
            libraries: "places",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapSingpore;
