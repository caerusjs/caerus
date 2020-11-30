import React from "react";
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from "@testing-library/react";

import {Anchor} from "../atoms/Anchor";

test("loads and displays Anchor atom", async () => {
  render(<Anchor href="bob" />)

  screen.debug()
  expect(screen.getByRole('link')).toHaveTextContent('bob') 
});