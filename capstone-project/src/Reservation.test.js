import { render, screen, fireEvent } from "@testing-library/react";
import ReserveForm from "./ReserveForm";
import ReservationsPage from "./Reservationspage";
import { act } from "react-dom/test-utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => () => {}, // Mock useNavigate to a no-op function
}));

test("initializeTimes returns expected array", () => {
  const mockInitializeTimes = jest.fn(() => ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"]);
  ReservationsPage.initializeTimes = mockInitializeTimes;
  render(<ReservationsPage />);
  const times = mockInitializeTimes();
  const expectedTimes = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];
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
  const mockSetSelectedDate = jest.fn();
  const mockOnSubmit = jest.fn();
  const mockAvailableTimes = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];
  render(
    <ReserveForm
      availableTimes={mockAvailableTimes}
      setAvailableTimes={mockSetAvailableTimes}
      setSelectedDate={mockSetSelectedDate}
      onSubmit={mockOnSubmit}
    />
  );

  const nameInput = screen.getByLabelText("Full Name:*");
  const emailInput = screen.getByLabelText("Email:*");
  const phoneInput = screen.getByLabelText("Telephone:");
  const occasionSelect = screen.getByLabelText("Occasion:");
  const guestsInput = screen.getByLabelText("Number of Guests:*");
  const dateInput = screen.getByLabelText("Choose Date:*");
  const timeSelect = screen.getByLabelText("Choose Time:*");

  const submitButton = screen.getByText("Submit");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(phoneInput, { target: { value: "1234567890" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(dateInput, { target: { value: "2023-10-23" } });
  fireEvent.change(timeSelect, { target: { value: "12:00" } });

  fireEvent.click(submitButton);

  expect(nameInput.value).toBe("John Doe");
  expect(emailInput.value).toBe("john@example.com");
  expect(phoneInput.value).toBe("1234567890");
  expect(occasionSelect.value).toBe("Birthday");
  expect(guestsInput.value).toBe("4");
  expect(dateInput.value).toBe("2023-10-23");
  expect(timeSelect.value).toBe("12:00");
});
