import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
//import Modal from "./Modal";

export default {
  title: "Button",
  component: Button
};
storiesOf("BasicModal", module).add("Modal", () => <Button />);
