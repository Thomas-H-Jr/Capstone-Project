import React from "react";
import { useState } from "react";

function ReserveForm({ availableTimes, setAvailableTimes }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setOccasion("");
    setGuests("");
    setDate("");
    setTime("");
  };
  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <fieldset className="fieldset-container">
          <div className="form-group">
            <label className="fullname-text" htmlFor="full-name-input">
              Full Name:<span>*</span>{" "}
            </label>
            <input
              className="fullname-input"
              type="text"
              id="full-name-input"
              name="fname"
              min="1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required></input>
          </div>
          <div className="form-group">
            <label htmlFor="email-input">
              Email:<span>*</span>{" "}
            </label>
            <input
              className="email-input"
              type="email"
              id="email-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required></input>
          </div>
          <div className="form-group">
            <label htmlFor="telephone-input">
              Telephone:<span>*</span>{" "}
            </label>
            <input
              type="tel"
              id="telephone-input"
              name="telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required></input>
          </div>
          <div className="form-group">
            <label htmlFor="occasion-input">Occasion:</label>
            <select
              id="occasion-input"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}>
              <option>Select an occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guests-input">
              Number of Guests:<span>*</span>{" "}
            </label>
            <input
              type="number"
              id="guests-input"
              name="guests"
              min="1"
              max="12"
              placeholder="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required></input>
          </div>
          <div className="form-group">
            <label htmlFor="date-input">
              Choose Date:<span>*</span>{" "}
            </label>
            <input
              type="date"
              id="date-input"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setTime("");
                setAvailableTimes([]);
              }}
              required></input>
          </div>
          <div className="form-group">
            <label htmlFor="time-input">
              Choose Time:<span>*</span>{" "}
            </label>
            <select id="time-input" value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="" disabled>
                Select a time
              </option>
              {Array.isArray(availableTimes) &&
                availableTimes.map((time) => (
                  <option key={time} value={time} className="time-option">
                    {time}
                  </option>
                ))}
            </select>
          </div>
        </fieldset>
        <input role="button" className="reserve-submit" type="submit" name="submit"></input>
      </form>
    </>
  );
}

export default ReserveForm;
