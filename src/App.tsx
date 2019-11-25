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
import IPFSGet from "./components/IPFSGet";
import ShowLatestBlocknumber from "./components/ShowLatestBlocknumber";
import ShowLatestBlocknumberWsProvider from "./components/ShowLatestBlocknumberWsProvider";
import SendTestTxOnRinkeby from "./components/SendTestTxOnRinkeby";

import styles from "./styles";


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Deimos",
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Try some of the following actions...</Text>
        <ScrollView style={styles.scrollView}>
          <Button buttonStyle={styles.button}
            title="show latest blocknumber from mainnet"
            onPress={() => this.props.navigation.navigate("ShowLatestBlocknumber")}
          />

          <Button buttonStyle={styles.button}
            title="show latest blocknumber from mainnet (using wsprovider)"
            onPress={() => this.props.navigation.navigate("ShowLatestBlocknumberWsProvider")}
          />

          <Button buttonStyle={styles.button}
            title="send a transaction to rinkeby (from test account..)"
            onPress={() => this.props.navigation.navigate("SendTestTxOnRinkeby")}
          />

          <Button buttonStyle={styles.button}
            title="get some data from the subgraph"
            onPress={() => this.props.navigation.navigate("SubgraphGet")}
          />
          <Button buttonStyle={styles.button}
            title="[TODO] subscribe to data from the subgraph"
            onPress={() => this.props.navigation.navigate("SubgraphGet")}
          />

          <Button buttonStyle={styles.button}
            title="get data from IPFS"
            onPress={() => this.props.navigation.navigate("IPFSGet")}
          />
          <Button buttonStyle={styles.button}
            title="[TODO] save data to IPFS"
          />
          <Button buttonStyle={styles.button}
            title="[TODO] create an Arc instance and do some stuff with it"
          />
          <Button buttonStyle={styles.button}
            title="[TODO] connect to a wallet and send a tx"
          />
          <Button buttonStyle={styles.button}
            title="[TODO] connect to a wallet and sign a message"
          />
          <Button buttonStyle={styles.button}
            title="[TODO] connect to a wallet and sign a message"
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
    ShowLatestBlocknumber,
    ShowLatestBlocknumberWsProvider,
    SendTestTxOnRinkeby,
    IPFSGet,
  },
  {
    initialRouteName: "Home",
  });

export default createAppContainer(AppNavigator);
