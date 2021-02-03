import React from "react";
import { useSelector } from "react-redux";
import "./Kart.css";
import Buttonn from "../Buttons/Button.js";

const Kart = () => {
  const kart = useSelector((state) => state.kart);
  const length = Object.keys(kart).length;
  const value = Object.values(kart);

  return (
    <div className="main-kart">
      <div className="kart-items">
        <h1 className="kart-header">Kart-items {length}</h1>

        {value.map((x) => {
          return (
            <div className="each-item">
              <div>
                <div className="imgTitle">
                  <div className="image">
                    <img className="abc" src={x.img} alt="phone-pic" />

                    <div className="buttons">
                      <Buttonn name="-" />
                      <Buttonn name="1" />
                      <Buttonn name="+" />
                    </div>
                    <Buttonn name="remove" type={x} />
                  </div>
                  <div className="title">
                    <p>{x.title}</p>
                    <p className="price">{x.price}</p>
                  </div>
                  <div className="address">
                    <p className="address-text">your selected Address is :</p>
                    <p>This is address</p>
                  </div>
                </div>

                <div className="border"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="price-details">
        <p className="price-header">Price Details</p>
      </div>
    </div>
  );
};

export default Kart;
