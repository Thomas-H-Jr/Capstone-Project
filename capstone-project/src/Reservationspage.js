import { React, useReducer, useEffect, useState } from "react";
import ReserveForm from "./ReserveForm";
import { fetchAPI, submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";

function ReservationsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(selectedDate));
  const navigate = useNavigate();

  function fetchData(selectedDate) {
    return fetchAPI(selectedDate);
  }
  function updateTimes(availableTimes, action) {
    switch (action.type) {
      case "UPDATE_TIMES":
        return action.payload;

      default:
        return availableTimes;
    }
  }

  function initializeTimes(selectedDate) {
    return fetchData(selectedDate);
  }

  useEffect(() => {
    async function fetchAndUpdateTimes() {
      try {
        const data = await fetchData(selectedDate);
        dispatch({ type: "UPDATE_TIMES", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here, e.g., set an error state
      }
    }
    fetchAndUpdateTimes();
  }, [selectedDate]);

  const submitForm = async (formData) => {
    try {
      const response = await submitAPI(formData); // Replace with your API call
      if (response === true) {
        navigate("reservation-confirmation"); // Navigate to the booking confirmed page
      } else {
        // Handle the case where the API call did not return true (e.g., show an error message)
      }
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <>
      <h1 className="booking-title">Reserve Table</h1>
      <ReserveForm
        availableTimes={availableTimes}
        setAvailableTimes={dispatch}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onSubmit={submitForm}
      />
    </>
  );
}

export default ReservationsPage;
