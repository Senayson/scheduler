import React from "react";
// import { jest } from "@jest/globals";
//The render function allows us to render components
import { cleanup, render } from "@testing-library/react";
//Import the component that we are testing
import Application from "components/Application";
import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});

// test.afterEach(cleanup);
describe("Mock functions", () => {
  it("doesn't call the function", () => {
    const fn = jest.fn();
    expect(fn).toHaveBeenCalledTimes(0);
  });
  it("calls the function", () => {
    const fn = jest.fn();
    fn(10);
    expect(fn).toHaveBeenCalledWith(10);
  });
  it("calls the function with specific arguments", () => {
    const fn = jest.fn();
    fn(10);
    expect(fn).toHaveBeenCalledWith(10);
  });
  it("uses the mock implementation", () => {
    const fn = jest.fn((a, b) => 42);
    fn(1, 2);
    expect(fn).toHaveReturnedWith(42);
  });
  it("uses the mock implementation", () => {
    const fn = jest.fn((a, b) => 42);
    fn(1, 2);
    expect(fn).toHaveReturnedWith(42);
  });
  it("calls the function", () => {
    const fn = jest.fn();
    fn();
    fn();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
