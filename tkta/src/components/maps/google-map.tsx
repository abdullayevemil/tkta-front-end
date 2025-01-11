"use client";
import React from "react";

const GoogleMapComponent = () => {
  return (
    <iframe
      width="598"
      height="450"
      className="w-full rounded-xl"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Təhsildə+Keyfiyyət+Təminatı+Agentliyi,TKTA`}
    ></iframe>
  );
};

export default GoogleMapComponent;
