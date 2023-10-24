import React from "react";
import SuccessSymbol from "./Pictures/SuccessSymbol.svg";

function ReservationConfirmation() {
  return (
    <>
      <section className="confirmation-group">
        <h1 className="confirmation-title">Reservation Confirmed!</h1>
        <img src={SuccessSymbol} className="confirmation-img" alt="success icon" />
      </section>
    </>
  );
}

export default ReservationConfirmation;
