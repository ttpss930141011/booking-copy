import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTitle">
        <h3>省時又省錢</h3>
        <span>現在訂閱，我們將寄送最佳訂房優惠給您。</span>
      </div>
      <div className="footerSubscribe">
        <div className="footerInput">
          <input type="text" placeholder="您的電子郵件" />
          <button>訂閱</button>
        </div>
        <div className="footerCheck">
          <input type="checkbox" id="subscribe" />
          <label htmlFor="subscribe">
            請發送 Booking.com 免費 App 下載連結給我！
          </label>
        </div>
      </div> 
      <div className="footerSubContainer">
        <button className="signup">將你的住宿註冊</button>
        <hr/>
        <div className="footerSocialItem">
          <ul>
            <li>手機板</li>
            <li>您的帳戶</li>
            <li>線上修改訂單</li>
            <li>客服支援</li>
            <li>加入聯盟行銷</li>
            <li>Booking.com 企業差旅服務</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
