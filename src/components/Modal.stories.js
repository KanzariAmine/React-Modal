import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button
};
storiesOf("BasicModal", module).add("Modal", () => <Button />);
