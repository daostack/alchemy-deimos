import React from "react";
import {
  ScrollView,
  View,
  Text,
} from "react-native";
import { createAppContainer } from "react-navigation";
import TestButton  from "./components/TestButton"
import { createStackNavigator } from "react-navigation-stack";
import GraphqlActions from "./screens/graphql/Actions";
import Web3Actions from "./screens/web3/Actions";
import IPFSActions from "./screens/ipfs/Actions";
import WalletActions from "./screens/wallet/Actions";
import styles from "./styles";
import SubgraphGet from  "./screens/graphql/SubgraphSubscribe"
import SubgraphSubscribe from  "./screens/graphql/SubgraphSubscribe"
import IPFSGet from  "./screens/ipfs/IPFSGet"
import Portis from  "./screens/wallet/Portis"
import WalletConnectTest from  "./screens/wallet/WalletConnectTest"
import Web3ConnectTest from  "./screens/wallet/Web3ConnectTest"
import FortmaticWebView from  "./screens/wallet/FortmaticWebView"
import FortmaticNative from "./screens/wallet/FortmaticNative"
import Deeplinking from  "./screens/wallet/Deeplinking"


interface IProps {
  navigation: any
}

class HomeScreen extends React.Component<IProps> {
  static navigationOptions = {
    title: "imos PoC",
  };

  render() {
    return (
      <View style={styles.view}>
        <Text>Try some of the following actions...</Text>
        <ScrollView style={styles.scrollView}>
          <TestButton
            title="Web3.js"
            onPress={() => this.props.navigation.navigate("Web3Actions")}
          />

          <TestButton
            title="Graphql/Subgraph"
            onPress={() => this.props.navigation.navigate("GraphqlActions")}
          />

          <TestButton
            title="IPFS"
            onPress={() => this.props.navigation.navigate("IPFSActions")}
          />

          <TestButton
            style="todo"
            title="@daostack/client"
          />
          <TestButton
            title="Wallet Experiments"
            onPress={() => this.props.navigation.navigate("WalletActions")}
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
    IPFSGet,
    Portis,
    WalletConnectTest,
    Web3ConnectTest,
    FortmaticWebView,
    FortmaticNative,
    Deeplinking,
    GraphqlActions,
    IPFSActions,
    Web3Actions,
    WalletActions
  },
  {
    initialRouteName: "Home",
  });

export default createAppContainer(AppNavigator);
