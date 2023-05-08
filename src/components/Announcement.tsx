import React from "react";
import "./announcement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Announcement: React.FC<{ type: string }> = ({ type }) => {
    return (
        <div className="announcement">
            <div className="announcementContainer">
                {type === "Upper half" ? (
                    <>
                        <div className="checktext">
                            <input type="checkbox" id="check" />
                            <label htmlFor="check">I'm traveling for work</label>
                        </div>
                        <div className="infoDes">
                            <div className="left">
                                {" "}
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </div>
                            <div className="right">
                                <h5>Coronavirus (COVID-19) support</h5>
                                Get the advice you need.Check thelatest COVID-19 restrictions before
                                you travel.
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="discountInfo">
                            <div className="left">
                                {" "}
                                <img
                                    src="https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="right">
                                <h2>Save 15% or more!</h2>
                                <span>
                                    Make your dream trip come true this summer! Book and stay before
                                    September 30, 2022, to save big. Plus, join the competition to
                                    create your first dynamic website and pave the way for a new
                                    business venture.
                                </span>
                                <button>Explore!</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="GlobalBanner">
                            <img
                                src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop@2x/1f5a273d871549f00bf6692f7ff612b5e8eda038.png"
                                alt=""
                            />
                            <div className="BannerInfoDes">
                                <h2>優惠立即享</h2>
                                <span>
                                    登入您的 Booking.com 帳戶，尋找藍色的 Genius
                                    圖標，輕鬆省一筆，鐵人挑戰後面會越來越難，加油！
                                </span>
                                <div className="Bannerbtn">
                                    <button>登入</button> <button>註冊</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Announcement;
