import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  StandaloneSearchBox,
  MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = ({ handleState, lat, lng }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 13, lng: 100 });
  const searchBoxRef = useRef(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
          handleState({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const onLoad = (ref) => {
    searchBoxRef.current = ref;
  };

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    const place = places[0];
    if (place) {
      const position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setCenter(position);
      handleState({ address: `${place.formatted_address}` });
    }
  };

  const onIdle = async () => {
    if (map) {
      const lat = map.getCenter().lat();
      const lng = map.getCenter().lng();
      const geocoder = new window.google.maps.Geocoder();
      const response = await geocodeLatLng(geocoder, lat, lng);
      if (response) {
        handleState({
          address: `${response.formatted_address}`,
          lat: lat,
          lng: lng,
        });
      } else {
        handleState({ address: "Description not available" });
      }
    }
  };

  const geocodeLatLng = (geocoder, lat, lng) => {
    return new Promise((resolve, reject) => {
      const latlng = { lat, lng };
      geocoder.geocode(
        { location: latlng, language: "th" },
        (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              resolve(results[0]);
            } else {
              resolve(null);
            }
          } else {
            reject("Geocoder failed due to: " + status);
          }
        }
      );
    });
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={(map) => setMap(map)}
        onIdle={onIdle}
        options={{
          disableDefaultUI: true, // Disable default UI controls
          zoomControl: false, // Enable zoom control
          streetViewControl: false, // Disable street view control
        }}
      >
        <MarkerF
          key="marker_1"
          position={{
            lat: lat,
            lng: lng,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="ค้นหาที่อยู่จัดส่งสินค้า"
              style={{
                boxSizing: "border-box",
                border: "1px solid transparent",
                width: "320px",
                height: "32px",
                padding: "0 12px",
                borderRadius: "100px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                fontSize: "14px",
                outline: "none",
                textOverflow: "ellipses",
                position: "relative",
                zIndex: 2,
              }}
            />
          </StandaloneSearchBox>
        </div>
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
