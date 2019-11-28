import React from "react";
import { View, Button } from "react-native";
import { WebView } from "react-native-webview";
import ActionTest from "./ActionTest";

const Web3 = require("web3");


class FortmaticTest extends ActionTest {
  static navigationOptions = {
    title: "Fortmatic test",
  };

  public description = "Connect with Fortmatic"

  public doit = async () => {
    this.setState({messages: []});
    this.log("done");
  }

  //
  // state= {
  //   fmProvider : {},
  // }

  connect() {
    const web3 = new Web3("https://mainnet.infura.io/");
    web3.eth.getBlock("latest").then(console.log);
  }


  getMessage = (message) => {
    console.log( JSON.parse(message) );

    // Infura works
    // // web3 = new Web3('https://mainnet.infura.io/');
    let web3;
    try {
      web3 = new Web3( JSON.parse(message) );
      //
      web3.eth.getBlock(48, function(error, result){
        if(!error)
          console.log(JSON.stringify(result));
        else
          console.error(error);
      });

    } catch(err) {
      this.log(err);
    }

  }

  render() {
    const WEBVIEW_REF = "webview";
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={WEBVIEW_REF}
          style={{flex:1}}
          onMessage={(event) => { this.getMessage(event.nativeEvent.data); }}

          source={{ html: `
            <html>
              <head>
                <title>TEST webview</title>
                <script src="https://cdn.jsdelivr.net/npm/fortmatic@1.0.0/dist/fortmatic.js"></script>

                <script>
                  let fm = new Fortmatic('pk_live_38A2BD2B1D4E9912');
                  window.ReactNativeWebView.postMessage( JSON.stringify(fm.getProvider()) );
                </script>
              </head>
              <body>
                <h1>this is a WebView</h1>
              </body>
            </html>
          `}}
        />

        <Button
          onPress={this.connect}
          title="Connect"
          color="#841584"
        />
      </View>
    );
  }
}
export default FortmaticTest;
