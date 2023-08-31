import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '500px'
  };
  
  const center = {
    lat: -0.182230,
    lng: -78.481750
  };

export const Map = () => {
    const{isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAiquoMep0k-LnlrgSk5O_MeTf_L7oT2og"
    });

        return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}         
        >
          <Marker position={center}/>          
        </GoogleMap>
    ) : <> loading... </>
}