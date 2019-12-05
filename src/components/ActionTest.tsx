import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
} from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles";

export const LogArea = function(messages: string[]) {
  return <FlatList
    data={messages}
    renderItem={(item) => Item(item)}
    keyExtractor={(item, index) => index.toString()}
  />;
};

export const Item = (item: any) => {
  console.log(item);
  return (
    <Text>{item.item.toString()}</Text>
  );
};

export class ActionTest extends React.Component<null, { messages: string[]}> {
  static navigationOptions = {
    title: "... provide title ...",
  };
  state = {messages: []};
  description = ''

  public log = (msg: string) => {
    this.setState({messages: this.state.messages + [msg]});
  }

  public doit = async () => {
    this.log("Hello!!");
  }
  public componentDidMount() {
    this.doit();
  }

  public render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{this.description}</Text>
        <Button buttonStyle={styles.button}
          title="do it again.."
          onPress={this.doit}
        />
        <LogArea messages ={this.state.messages} />
      </View>
    );
  }
}

export default ActionTest;
