import React from "react";
import { useSelector } from "react-redux";
import "./phone-zoom.css";
const PhoneZoom = () => {
  const zoom = useSelector((state) => state.phoneZoom);
  console.log(zoom);
  return (
    <div className="Main-zoom">
      <img src={zoom.img} className="phone-image" alt="phone" />
      <div className="title">
        <h1> {zoom.title}</h1>
       <div className="priceNdiscount"><p>{zoom.price}</p>
       <p>{zoom.scrathedPrice}</p></div>
       <p>{zoom.rating}</p>
       <p><b>Discription</b> - {zoom.discription}</p>
       <p><b>Highlights</b> - {zoom.highlights}</p>
      </div>
    </div>
  );
};

export default PhoneZoom;
