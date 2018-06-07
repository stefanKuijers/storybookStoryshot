import { text } from "@storybook/addon-knobs";
import React from "react";

import { Avatar } from "../../../molecules";
import { stageStoriesOf } from "../utils";

stageStoriesOf("Molecules/Avatar", "Avatar")
  .add("Simple Avatar", () => {
    return (
      <>
        <Avatar label={text("label", "DL")} />
        <Avatar name={text("User's name", "John Doe")} />
      </>
    );
  })
  .add("Avatar with info", () => {
    return (
      <>
        <Avatar
          name={text("User' name", "John Doe")}
          userName={text("Username", "john88")}
          emailAddress={text("Email address", "john88@mail.com")}
        />
      </>
    );
  });
