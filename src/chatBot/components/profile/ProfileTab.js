import React from "react";
import Link from "../Link";

function ProfileTab(props) {
  return (
    <div>
      <div className="tab-box__currentlyOn">
        <p>Currently on :</p>
        <span>{props.icon}</span>
        <input type="text" />
        <Link link="input_value" name={<i className="fas fa-share"></i>} />
      </div>
      <div className="tab-box__details">Details</div>
      <form className="tab-box__form">
        <p>Name</p>
        <input type="text" name="fullName" placeholder="Name" />
        <span className="tab-box__flex-container">
          <span className="tab-box__flex-first">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </span>
          <span className="tab-box__flex-second">
            <label>Phone</label>
            <input type="phone" name="phone" placeholder="Phone" />
          </span>
        </span>
        <label>Remarks</label>
        <textarea
          type="text"
          name="remarks"
          rows="2"
          cols="45"
          placeholder="Remarks"
        />
      </form>
    </div>
  );
}

export default ProfileTab;
