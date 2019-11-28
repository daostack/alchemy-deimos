import React from "react";
import {
  ScrollView,
  View,
  Text,
} from "react-native";
import { Button } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SubgraphGet from "./components/SubgraphGet";
import SubgraphSubscribe from "./components/SubgraphSubscribe";
import IPFSGet from "./components/IPFSGet";
import ShowLatestBlocknumber from "./components/ShowLatestBlocknumber";
import ShowLatestBlocknumberWsProvider from "./components/ShowLatestBlocknumberWsProvider";
import SendTestTxOnRinkeby from "./components/SendTestTxOnRinkeby";
import Portis from "./components/Portis";
import WalletConnectTest from "./components/WalletConnectTest";
import Web3ConnectTest from "./components/Web3ConnectTest";
import FortmaticTest from "./components/FortmaticTest";

import styles from "./styles";

class TestButton extends React.Component {
  render() {
    let buttonStyle;
    if (this.props.style === "todo") {
      buttonStyle = styles.buttonRed;
    } else if (this.props.style === "inprogress") {
      buttonStyle = styles.buttonOrange;
    } else {
      buttonStyle = styles.button;
    }
    return <Button
      buttonStyle={buttonStyle}
      {...this.props}></Button>;
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Deimos",
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Try some of the following actions...</Text>
        <ScrollView style={styles.scrollView}>
          <TestButton
            title="show latest blocknumber from mainnet"
            onPress={() => this.props.navigation.navigate("ShowLatestBlocknumber")}
          />

          <TestButton
            title="show latest blocknumber from mainnet (using wsprovider)"
            onPress={() => this.props.navigation.navigate("ShowLatestBlocknumberWsProvider")}
          />

          <TestButton
            title="send a transaction to rinkeby (from test account..)"
            onPress={() => this.props.navigation.navigate("SendTestTxOnRinkeby")}
          />

          <TestButton
            title="get some data from the subgraph"
            onPress={() => this.props.navigation.navigate("SubgraphGet")}
          />
          <TestButton
            title="subscribe to data from the subgraph"
            onPress={() => this.props.navigation.navigate("SubgraphSubscribe")}
          />

          <TestButton
            title="get data from IPFS (using fetch)"
            onPress={() => this.props.navigation.navigate("IPFSGet")}
          />
          <TestButton
            style="todo"
            title="get data from IPFS (using ipfsclient)"
          />
          <TestButton
            style="todo"
            title="save data to IPFS"
          />
          <TestButton
            style="todo"
            title="create an Arc instance and do some stuff with it"
          />

          <TestButton
            style="inprogress"
            title="Portis"
            onPress={() => this.props.navigation.navigate("Portis")}
          />
          <TestButton
            style="inprogress"
            title="Fortmatic"
            onPress={() => this.props.navigation.navigate("FortmaticTest")}
          />
          <TestButton
            style="inprogress"
            title="WalletConnect"
            onPress={() => this.props.navigation.navigate("WalletConnectTest")}
          />
          <TestButton
            style="inprogress"
            title="Web3Connect"
            onPress={() => this.props.navigation.navigate("Web3ConnectTest")}
          />
          <TestButton
            style="todo"
            title="connect to a wallet and send a tx"
          />
          <TestButton
            style="todo"
            title="connect to a wallet and sign a message"
          />
          <TestButton
            style="todo"
            title="connect to a wallet and sign a message"
          />
        </ScrollView>

      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen},
    SubgraphGet,
    SubgraphSubscribe,
    ShowLatestBlocknumber,
    ShowLatestBlocknumberWsProvider,
    SendTestTxOnRinkeby,
    IPFSGet,
    Portis,
    WalletConnectTest,
    Web3ConnectTest,
    FortmaticTest,
  },
  {
    initialRouteName: "Home",
  });

export default createAppContainer(AppNavigator);
