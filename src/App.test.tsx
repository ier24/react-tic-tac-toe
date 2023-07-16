import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const textIndocument = screen.getByText(/三目並べ/i);
  expect(textIndocument).toBeInTheDocument();
});
