import React from "react";

import { render, screen } from "@testing-library/react";



import {Anchor} from "../atoms/Anchor";

test("loads and displays Anchor atom", async () => {
  render( <Anchor /> )

  screen.debug()
  
});
