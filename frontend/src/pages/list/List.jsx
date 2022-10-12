import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

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
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );
  console.log(data);

  const handleClick = () => {
    reFetch();
  };

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
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )} `}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
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
                  <input
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                    type="number"
                  />
                </div>
                <div className="lsOptionItem">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                    type="number"
                  />
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
            <button onClick={handleClick} className="btnsearch">
              search
            </button>
          </div>

          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
