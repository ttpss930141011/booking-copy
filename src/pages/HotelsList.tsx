import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./hotelslist.scss";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchItem from "../components/SearchItem";
import { useLocation } from "react-router-dom";

const HotelList = () => {
    const locationSearchBarData = useLocation();
    const [destination, setDestination] = useState(locationSearchBarData.state?.destination);
    const [dates, setDates] = useState(locationSearchBarData.state?.dates);

    const [openConditions, setOpenConditions] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);

    const [conditions, setConditions] = useState(locationSearchBarData.state?.conditions);
    console.log(conditions);
    return (
        <div className="home">
            <NavBar />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <div className="searchTitle">搜尋</div>
                        <div className="listItem">
                            <label>目的地／住宿名稱：</label>
                            <input
                                type="text"
                                className="searchInput"
                                placeholder={destination === "" ? "要去哪裡?" : destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="listItem">
                            <label>
                                入住/退房日期 {format(dates[0].startDate, "MM/dd/yyyy")} -{" "}
                                {format(dates[0].endDate, "MM/dd/yyyy")}
                            </label>
                            <span className="dates">
                                <div
                                    className="searchInput"
                                    onClick={() => setOpenCalendar(!openCalendar)}
                                >
                                    入住時間 - 退房時間
                                </div>
                                {openCalendar && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item: any) => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </span>
                        </div>
                        <div className="listItem">
                            <div className="listItemLimitPrice">
                                <span className="limitTitle">每晚最低價格</span>
                                <input type="text" className="searchInput" />
                            </div>
                            <div className="listItemLimitPrice">
                                <span className="limitTitle">每晚最高價格</span>
                                <input type="text" className="searchInput" />
                            </div>
                            <div className="listItmConditions">
                                <span
                                    className="SearchText"
                                    onClick={() => setOpenConditions(!openConditions)}
                                >
                                    {conditions.adults}位成人 · {conditions.children} 位小孩 ·
                                    {conditions.rooms} 間房
                                </span>
                            </div>
                        </div>
                        <div className="listItem">
                            {" "}
                            <button className="searchbtn">搜尋</button>
                        </div>
                    </div>
                    <div className="listResult">
                        <div className="resultTitle">
                            <h2>Taipei: 626 properties found</h2>
                            <div className="map">
                                <button>Show on map</button>
                            </div>
                        </div>
                        <SearchItem active />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HotelList;
