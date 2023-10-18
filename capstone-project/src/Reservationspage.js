import React from "react";

function ReservationsPage() {
  return (
    <>
      <h1 className="booking-title">Reserve Table</h1>
      <form className="booking-form">
        <fieldset className="fieldset-container">
          <div className="fullname">
            <label className="fullname-text" for="fname">
              Full Name:<span>*</span>{" "}
            </label>
            <input className="fullname-input" type="text" name="fname" min="1" required></input>
          </div>
          <div className="email">
            <label for="email">
              Email:<span>*</span>{" "}
            </label>
            <input className="email-input" type="email" name="email" required></input>
          </div>
          <div className="telephone">
            <label for="telephone">
              Phone Number:<span>*</span>{" "}
            </label>
            <input type="tel" name="telephone" required></input>
          </div>
          <div className="occasion">
            <label for="occasion">Occasion:</label>
            <td>
              <tr>
                <input type="radio" name="birthday" value="birthday"></input>
                <label for="birthday">Birthday</label>
              </tr>
              <tr>
                <input type="radio" name="anniversary" value="anniversary"></input>
                <label for="anniversary">Anniversary</label>
              </tr>
              <tr>
                <input type="radio" name="engagement" value="engagement"></input>
                <label for="engagement">Engagement</label>
              </tr>
            </td>
          </div>
          <div className="guests">
            <label for="guests">
              Number of Guests:<span>*</span>{" "}
            </label>
            <input type="number" name="guests" min="1" max="12" placeholder="1" required></input>
          </div>
          <div className="date-time">
            <label for="date-time">
              Date and Time:<span>*</span>{" "}
            </label>
            <input type="datetime-local" name="date-time" required></input>
          </div>
        </fieldset>
        <input className="reserve-submit" type="submit" name="submit"></input>
      </form>
    </>
  );
}

export default ReservationsPage;
