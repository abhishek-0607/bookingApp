import React from "react";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { Featured } from "../../components/featured/Featured";
import { PropertyList } from "../../components/propertyList/PropertyList";

import "./home.css";
import { FeaturedProperties } from "../../components/featuredProperties/FeaturedProperties";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-title">Home guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};
