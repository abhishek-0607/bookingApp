import React, { useState } from "react";
import "./list.css";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/searchItem/SearchItem";
export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )} `}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOption">
                <div className="lsOptionItem">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input className="lsOptionInput" type="number" />
                </div>
                <div className="lsOptionItem">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input className="lsOptionInput" type="number" />
                </div>
                <div className="lsOptionItem">
                  <span>Adults</span>
                  <input
                    min={1}
                    className="lsOptionInput"
                    type="number"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span>Children</span>
                  <input
                    min={0}
                    className="lsOptionInput"
                    type="number"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span>Room</span>
                  <input
                    min={1}
                    className="lsOptionInput"
                    type="number"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="btnsearch">search</button>
          </div>

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};
