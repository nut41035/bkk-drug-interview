import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = ({ apiKey }) => {
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(center);
  const [address, setAddress] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGeocode = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        const position = results[0].geometry.location;
        setMarkerPosition({ lat: position.lat(), lng: position.lng() });
        map.panTo(position);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter address"
      />
      <button onClick={handleGeocode}>Find</button>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={15}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
