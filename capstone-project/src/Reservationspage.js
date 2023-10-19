import React from "react";
import { useState } from "react";

function ReservationsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName = "";
    setEmail = "";
    setPhone = "";
    setOccasion = "";
    setGuests = "";
    setDate = "";
  };
  return (
    <>
      <h1 className="booking-title">Reserve Table</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <fieldset className="fieldset-container">
          <div className="fullname">
            <label className="fullname-text" htmlFor="fname">
              Full Name:<span>*</span>{" "}
            </label>
            <input
              className="fullname-input"
              type="text"
              name="fname"
              min="1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required></input>
          </div>
          <div className="email">
            <label htmlFor="email">
              Email:<span>*</span>{" "}
            </label>
            <input
              className="email-input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required></input>
          </div>
          <div className="telephone">
            <label htmlFor="telephone">
              Telephone:<span>*</span>{" "}
            </label>
            <input
              type="tel"
              name="telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required></input>
          </div>
          <div className="occasion">
            <label htmlFor="occasion">Occasion:</label>
            {/* <select>
              <option></option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select> */}
            <td>
              <tr>
                <input
                  type="radio"
                  name="birthday"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}></input>
                <label htmlFor="birthday">Birthday</label>
              </tr>
              <tr>
                <input
                  type="radio"
                  name="anniversary"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}></input>
                <label htmlFor="anniversary">Anniversary</label>
              </tr>
              <tr>
                <input
                  type="radio"
                  name="engagement"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}></input>
                <label htmlFor="engagement">Engagement</label>
              </tr>
            </td>
          </div>
          <div className="guests">
            <label htmlFor="guests">
              Number of Guests:<span>*</span>{" "}
            </label>
            <input
              type="number"
              name="guests"
              min="1"
              max="12"
              placeholder="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required></input>
          </div>
          <div className="date-time">
            <label htmlFor="date-time">
              Choose Date and Time:<span>*</span>{" "}
            </label>
            <input
              type="datetime-local"
              name="date-time"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required></input>
          </div>
          {/* <div className="time">
            <label htmlFor="time">
              Choose Time:<span>*</span>{" "}
            </label>
            <select>
              <option>5:00pm</option>
              <option>6:00pm</option>
              <option>7:00pm</option>
              <option>8:00pm</option>
              <option>9:00pm</option>
              <option>10:00pm</option>
            </select>
          </div> */}
        </fieldset>
        <input className="reserve-submit" type="submit" name="submit"></input>
      </form>
    </>
  );
}

export default ReservationsPage;
