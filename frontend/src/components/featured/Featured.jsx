import React from "react";
import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg"
          alt="featuredImg"
        />
        <div className="featured-titles">
          <h1 className="margin0">Delhi</h1>
          <h2 className="margin0">123 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
          alt="featuredImg"
        />
        <div className="featured-titles">
          <h1 className="margin0">Goa</h1>
          <h2 className="margin0">123 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-img"
          src="https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
        />
        <div className="featured-titles">
          <h1 className="margin0">Mumbai</h1>
          <h2 className="margin0">123 properties</h2>
        </div>
      </div>
    </div>
  );
};
