const configure = require("@storybook/react").configure;

const req = require.context('../storybook', true, /story\.tsx$/);

// function loadStories() {
// }

function loadStories() {
  // setup & dependencies
  require("./stories/Environment");

  // get all other stories
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
