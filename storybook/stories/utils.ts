import { withTests } from "@storybook/addon-jest";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";

// tslint:disable-next-line:no-var-requires
const results = require("../../test/unit/.jest-test-results.json");

export function stageStoriesOf(name: string, componentName: string, ...tests: any[]) {
  const title = name.match("/") ? name.replace("/", " > ") : `${name} > ${componentName}`;

  return storiesOf(name, module)
    .addDecorator(withTests({ results })(`${componentName}.test.tsx`, ...tests))
    .addDecorator(withKnobs)
    .addDecorator(
      host({
        title,
        align: "center middle",
        padding: "15px"
      })
    );
}

export const t = (v: string) => v;
