const nock = require("nock");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
require("jest-enzyme");

process.env.NODE_ENV = "development";

enzyme.configure({ adapter: new Adapter() });
afterEach(() => {
  nock.cleanAll();
});
