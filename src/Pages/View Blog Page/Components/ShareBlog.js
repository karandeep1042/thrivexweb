import React from "react";
import "../../../css/View Blog Page/ShareBlog.css";

export default function ShareBlog() {
  return (
    <>
      <div className="shareblogmaincontainer">
        <div className="shareblogheader"><p>Share this post:</p></div>
        <div className="sharebloglist">
          <div className="shareblogitem sbi1">
            <i className="fa-brands fa-facebook-f"></i>
            <p>Facebook</p>
          </div>
          <div className="shareblogitem sbi2">
            <i class="fa-brands fa-x-twitter"></i>
            <p>Twitter</p>
          </div>
          <div className="shareblogitem sbi3">
            <i className="fa-brands fa-linkedin"></i>
            <p>Linkedin</p>
          </div>
          <div className="shareblogitem sbi4">
            <i className="fa-brands fa-whatsapp"></i>
            <p>Whatsapp</p>
          </div>
        </div>
      </div>
    </>
  );
}
