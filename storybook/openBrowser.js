const openBrowser = require('react-dev-utils/openBrowser');

// TODO: get feedback from other proces. Could pipe the build and on finish open browser
setTimeout(() => {
  openBrowser('http://localhost:9001');
}, 5000);
