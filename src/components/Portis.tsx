import Web3 from "web3";
// import Portis from "@portis/web3";

import ActionTest from "./ActionTest";


class PortisConnect extends ActionTest {
  static navigationOptions = {
    title: "Connect with portis",
  };

  public description = "Connect with Portis"

  public doit = async () => {
    this.state.messages = [];
    this.log("the `@portis/web3` package is for use in the browser, using it throws `document is not defined`, perhaps from [here](https://github.com/portis-project/web-sdk/blob/master/packages/portis-web3/src/index.ts#L31");
    this.log("[but we are patching it..]");

    // patch _initWidget as it is called by the contructor and expects a `document` and a DOM
    let portis;
    try {
      // we are mocking a (very small) piece of the DOM, for portis :-)
      global.document = {
        createElement: () => {return { style: {}};},
      };
      const Portis = require("@portis/web3");
      Portis._initWidget = () => {};
      portis = new Portis("YOUR_DAPP_ID", "mainnet");
      this.log(JSON.toString(portis.provider));
    } catch(err) {
      this.log(`ERROR: ${err.message}`);
    }
    // this.log("done");
    this.log("getting accounts...");
    const web3 = new Web3(portis.provider);
    web3.eth.getAccounts((error, accounts) => {
      this.log(accounts);
    });
  }

}
export default PortisConnect;
