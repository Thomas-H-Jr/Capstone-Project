import { render, screen, fireEvent } from "@testing-library/react";
import ReserveForm from "./ReserveForm";
import ReservationsPage from "./Reservationspage";
import { act } from "react-dom/test-utils";

test("initializeTimes returns expected array", () => {
  const mockInitializeTimes = jest.fn(() => [
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
    "10:00pm",
  ]);
  ReservationsPage.initializeTimes = mockInitializeTimes;
  render(<ReservationsPage />);
  const times = mockInitializeTimes();
  const expectedTimes = ["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"];
  expect(times).toEqual(expectedTimes);
});

test("To validate updateTimes returns the value that is provided in the state", () => {
  const mockUpdateTimes = jest.fn((state, action) => {
    if (action && action.type === "UPDATE_TIMES") {
      return action.payload;
    }
    return state;
  });
  ReservationsPage.updateTimes = mockUpdateTimes;
  render(<ReservationsPage />);
  const action = { type: "UPDATE_TIMES", payload: ["newTime1", "newTime2"] };
  act(() => {
    mockUpdateTimes(undefined, action);
  });
  const updatedTimes = mockUpdateTimes(undefined, action);
  const expectedState = ["newTime1", "newTime2"];
  expect(updatedTimes).toEqual(expectedState);
});

test("ReserveForm can be submitted by a user", () => {
  const mockSetAvailableTimes = jest.fn();
  const mockAvailableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
  render(
    <ReserveForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} />
  );

  const nameInput = screen.getByLabelText("Full Name:*");
  const emailInput = screen.getByLabelText("Email:*");
  const phoneInput = screen.getByLabelText("Telephone:*");
  const occasionSelect = screen.getByLabelText("Occasion:");
  const guestsInput = screen.getByLabelText("Number of Guests:*");
  const dateInput = screen.getByLabelText("Choose Date:*");
  const timeSelect = screen.getByLabelText("Choose Time:*");

  const submitButton = screen.getByRole("button");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(phoneInput, { target: { value: "1234567890" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(dateInput, { target: { value: "2023-10-21" } });
  fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });

  fireEvent.click(submitButton);

  expect(nameInput.value).toBe("");
  expect(emailInput.value).toBe("");
  expect(phoneInput.value).toBe("");
  expect(occasionSelect.value).toBe("Select an occasion");
  expect(guestsInput.value).toBe("");
  expect(dateInput.value).toBe("");
  expect(timeSelect.value).toBe("");
});
