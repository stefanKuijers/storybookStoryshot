import { text } from "@storybook/addon-knobs";
import React from "react";

import { Branding } from "../../../atoms";
import { stageStoriesOf } from "../utils";

stageStoriesOf("Atoms", "Branding").add("Branding", () => (
  <Branding
    logo={text("Logo (src):", "https://i.ytimg.com/vi/4yikpWtIFU8/maxresdefault.jpg")}
    tagline={text("Tagline?:", "")}
  />
));
