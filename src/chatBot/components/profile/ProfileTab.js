import React from "react";
import Link from "../Link";

function ProfileTab(props) {
  return (
    <div>
      <div>
        <p>Currently on :</p>
        <icon>{props.icon}</icon>
        <input type="text" value="" />
        <Link link="input_value" name={<i class="fas fa-share"></i>} />
      </div>
      Details
      <form>
        <label for="fullName">Name</label>
        <input type="text" id="fullName" name="fullName" value="" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" value="" />
        <label for="phone">Phone</label>
        <input type="phone" id="phone" name="phone" value="" />
        <label for="remarks">Remarks</label>
        <textarea
          type="text"
          id="remarks"
          name="remarks"
          rows="4"
          cols="50"
          value=""
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ProfileTab;
