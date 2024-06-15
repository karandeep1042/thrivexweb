import React from "react";
import '../../../css/Contact Page/ContactForm.css'

export default function ContactForm() {
  return (
    <>
      <div className="contactformmaincontainer">
        <div className="contactformheader">Questions? Drop us a line!</div>
        <div className="contactforminputs">
          <div className="contactforminput">
            <label>Name </label>
            <input type="text" name="" id="" />
          </div>
          <div className="contactforminput">
            <label>Email </label>
            <input type="text" name="" id="" />
          </div>
          <div className="contactforminput">
            <label>Phone number </label>
            <input type="text" name="" id="" />
          </div>
          <div className="contactforminput">
            <label>Message </label>
            <textarea name="" id="" cols="90" rows="10"></textarea>
          </div>
          <div className="contactforminput">
            <div className="contactformsubmitbtn">
              Send message
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
