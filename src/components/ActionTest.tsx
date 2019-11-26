import React from "react";
import {
  ScrollView,
  View,
  Text,
} from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles";

const LogArea = function(messages) {
  const text = messages.map((s, i) => <Text key={i}>{s}</Text>);
  return(
    <View>{text}
    </View>
  );
};

export class ActionTest extends React.Component {
  static navigationOptions = {
    title: "Get some data from the subgraph",
  };
  state = {messages: []};
  description = "A description";

  public log = (msg) => {
    const messages = this.state.messages;
    console.log(messages);
    messages.push(msg);
    console.log(messages);
    this.setState({messages});
  }

  public doit = async () => {
    this.log("Hello!!");
  }
  public componentDidMount() {
    this.doit();
  }

  public render(): RenderOutput {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{this.description}</Text>
        <Button buttonStyle={styles.button}
          title="do it again.."
          onPress={this.doit}
        />
        <ScrollView style={styles.scrollView}>
          {LogArea(this.state.messages)}
        </ScrollView>
      </View>
    );
  }
}

export default ActionTest;
