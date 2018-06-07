const appRoot = require("app-root-path");
const path = require("path");

// const withTests = require('@storybook/addon-jest').withTests;
// // import { withTests } from ;
// const testResults = require('../test/unit/.jest-test-results.json');

function parseInt(str, fallback) {
  return (str && Number.parseInt(str, 10)) || fallback;
}

function resolveAbsolute(...paths) {
  return path.resolve(appRoot.path, path.join(...paths));
}

// function stageStoriesOf(name, components = []) {
// 	return storiesOf(name, module)
//     .addDecorator(withKnobs)
//     .addDecorator(stageWithTests(components))
// 	  .addDecorator(host({
// 	    title: 'A host container for components under test.',
// 	    align: 'center bottom',
// 	    height: '80%',
// 	    width: '80%',
// 	    padding: 15
// 	  }));
// }

// function stageWithTests(components) {
//   return withTests({
//     testResults
//   })(components);
// }

module.exports = {
  parseInt,
  resolveAbsolute
  // stageStoriesOf,
  // stageWithTests
};
