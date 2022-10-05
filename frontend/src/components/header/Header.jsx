import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setoptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setoptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container list-mode" : "header-container"
        }
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header-title">A lifetime discounts? It's Genius.</h1>
            <p className="header-desc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Booking account
            </p>
            <button className="header-btn">Sign in / Register</button>
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  className="header-search-input"
                  type="text"
                  placeholder="Where are you going?"
                />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  onClick={() => {
                    if (openOptions) setOpenOptions(!openOptions);
                    setOpenDate(!openDate);
                  }}
                  className="header-search-text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )} `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                <span
                  onClick={() => {
                    if (openDate) setOpenDate(!openDate);
                    setOpenOptions(!openOptions);
                  }}
                  className="header-search-text"
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="option-item">
                      <span className="option-text">Adult</span>
                      <div className="option-counter">
                        <button
                          disabled={options.room <= 1}
                          className="option-counter-button"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.adult}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Children</span>
                      <div className="option-counter">
                        <button
                          disabled={options.children <= 0}
                          className="option-counter-button"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.children}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Room</span>
                      <div className="option-counter">
                        <button
                          disabled={options.room <= 1}
                          className="option-counter-button"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.room}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="header-btn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
