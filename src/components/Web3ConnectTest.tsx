import React from "react";
import Web3 from "web3";
import Web3Connect from "web3connect";
import ActionTest from "./ActionTest";

// const Portis = require("@portis/web3");
//
// <Web3Connect.Button
//   providerOptions={{
//     portis: {
//       id: "PORTIS_ID", // required
//       network: "mainnet", // optional
//     },
//     fortmatic: {
//       key: "FORTMATIC_KEY", // required
//       network: "mainnet", // optional
//     },
//   }}
//   onConnect={(provider) => {
//     const web3 = new Web3(provider); // add provider to web3
//   }}
//   onClose={() => {
//     console.log("Web3Connect Modal Closed"); // modal has closed
//   }}
// />;

// class Web3ConnectRN extends Web3Connect {
//
//   public renderModal() {
//     this.log("Mocked Web3Connect.renderModal");
//   }
// }

Web3Connect.Core.renderModal = () => { this.log("hello");};

class Web3ConnectTest extends ActionTest {
  static navigationOptions = {
    title: "Connect with Web3Connect",
  };

  public description = "Connect with Web3Connect"

  public doit = async () => {
    this.setState({messages: []});
    const web3ConnectProviderOptions = {
      network: "mainnet",
      // portis: {
      //   package: Portis,
      //   options: {
      //     id: "aae9cff5-6e61-4b68-82dc-31a5a46c4a86",
      //   },
      // },
      // fortmatic: {
      //   package: Fortmatic,
      //   options: {
      //     key: "pk_live_38A2BD2B1D4E9912",
      //   },
      // },
      squarelink: {
        options: {
          id: null,
        },
      },
    };

    this.log("create Core instance");

    // we are mocking a (very small) piece of the DOM, for portis :-)
    global.document = {
      createElement: () => {return { style: {}};},
    };


    const web3Connect = new Web3Connect.Core({
      modal: false,
      providerOptions: web3ConnectProviderOptions,
    });
    this.log("xx");
    this.log("done");
  }

}
export default Web3ConnectTest;
