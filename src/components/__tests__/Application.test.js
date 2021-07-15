import React from "react";
import axios from "axios";
import {
  getByText,
  prettyDOM,
  getAllByTestId,
  getByTestId,
  getByAltText,
  getByPlaceholderText,
  waitForElementToBeRemoved,
  queryByText,
  queryByAltText,
  getAllByAltText,
} from "@testing-library/react";

import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {
  //Test Number 1
  it("defaults to Monday and changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);

    await waitForElement(() => getByText("Tuesday"));
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
  //Test Number 2
  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container, debug } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];
    fireEvent.click(getByAltText(appointment, "Add"));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" },
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));
    const saving = getByText(appointment, "SAVING");
    expect(saving).toBeInTheDocument();
    await waitForElement(() => getByAltText(appointment, "Edit"));
    const eachDay = getAllByTestId(container, "day");

    const monday = eachDay.find((day) => queryByText(day, "Monday"));
    expect(getByText(monday, "no spots remaining")).toBeInTheDocument();
  });
  //Test Number 3
  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointment = getAllByTestId(container, "appointment").find(
      (appointment) => queryByText(appointment, "Archie Cohen")
    );

    fireEvent.click(queryByAltText(appointment, "Delete"));
    expect(
      getByText(appointment, "Delete the appointment?")
    ).toBeInTheDocument();

    fireEvent.click(queryByText(appointment, "Confirm"));

    expect(getByText(appointment, "DELETING")).toBeInTheDocument();

    await waitForElement(() => getByAltText(appointment, "Add"));

    const eachDay = getAllByTestId(container, "day");
    const monday = eachDay.find((day) => queryByText(day, "Monday"));

    expect(getByText(monday, "2 spots remaining")).toBeInTheDocument();
  });
  //Test Number 4
  it("loads data, edits an interview and keeps the spots remaining for Monday the same", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointment = getAllByTestId(container, "appointment").find(
      (appointment) => queryByText(appointment, "Archie Cohen")
    );

    fireEvent.click(queryByAltText(appointment, "Edit"));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Sen Hailu" },
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

    fireEvent.click(queryByText(appointment, "Save"));
    const saving = getByText(appointment, "SAVING");
    expect(saving).toBeInTheDocument();

    await waitForElement(() => getByAltText(appointment, "Edit"));
    const eachDay = getAllByTestId(container, "day");
    const monday = eachDay.find((day) => queryByText(day, "Monday"));

    expect(getByText(monday, "1 spot remaining")).toBeInTheDocument();
  });
  //Test number 5
  it("shows the save error when failing to save an appointment", async () => {
    const { container, debug } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment").find(
      (appointment) => queryByText(appointment, "Archie Cohen")
    );
    fireEvent.click(getByAltText(appointment, "Edit"));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Sen Hailu" },
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(queryByText(appointment, "Save"));
    axios.put.mockRejectedValueOnce();
    waitForElement(() =>
      expect(
        getByText(appointment, "Error saving appointment")
      ).toBeInTheDocument()
    );
  });
  //Test number 6
  it("shows the delete error when failing to delete an appointment", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointment = getAllByTestId(container, "appointment").find(
      (appointment) => queryByText(appointment, "Archie Cohen")
    );

    fireEvent.click(queryByAltText(appointment, "Delete"));

    expect(
      getByText(appointment, "Delete the appointment?")
    ).toBeInTheDocument();

    fireEvent.click(queryByText(appointment, "Confirm"));
    await axios.delete.mockRejectedValueOnce();
    expect(getByText(appointment, "DELETING")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByText(appointment, "DELETING"));
    waitForElement(() =>
      expect(
        getByText(appointment, "Error deleting appointment")
      ).toBeInTheDocument()
    );
  });
});
