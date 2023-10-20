import React from "react";
import { useReducer } from "react";
import ReserveForm from "./ReserveForm";

function ReservationsPage() {
  function updateTimes(availableTimes, action) {
    switch (action.type) {
      case "UPDATE_TIMES":
        return action.payload;

      default:
        return availableTimes;
    }
  }

  function initializeTimes() {
    return ["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"];
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <>
      <h1 className="booking-title">Reserve Table</h1>
      <ReserveForm availableTimes={availableTimes} setAvailableTimes={dispatch} />
    </>
  );
}

export default ReservationsPage;
