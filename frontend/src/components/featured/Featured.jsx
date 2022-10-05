import React from "react";
import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt="featuredImg"
        />
        <div className="featured-titles">
          <h1>Delhi</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
          alt="featuredImg"
        />
        <div className="featured-titles">
          <h1>Goa</h1>
          <h1>789 properties</h1>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
        />
        <div className="featured-titles">
          <h1>Mumbai</h1>
          <h1>345 properties</h1>
        </div>
      </div>
    </div>
  );
};
