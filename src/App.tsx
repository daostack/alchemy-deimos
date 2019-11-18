import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import AppHeader from "./AppHeader";
import ProposalList from "./components/ProposalList";
// import {initializeArc} from "./arc";

export class App extends React.Component<{}, {arcIsInitialized: boolean; retryingArc: boolean}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      arcIsInitialized: false,
      retryingArc: false,
    };
  }

  public async componentDidMount(): Promise<void> {
    // Do this here because we need to have initialized Arc first.  This will
    // not create a provider for the app, rather will just initialize Arc with a
    // readonly provider with no account, internal only to it.
    // initializeArc()
    //   .then(async (success: boolean) => {
    //     while (!success) {
    //       this.setState({retryingArc: true});
    //       await sleep(5000);
    //       success = await initializeArc();
    //     }
    //     this.setState({arcIsInitialized: true});
    //   })
    //   .catch(
    //     (err): void => {
    //       // eslint-disable-next-line no-console
    //       console.log(err);
    //     },
    //   );
  }

  public render(): RenderOutput {
    const usingHermes =
      typeof HermesInternal === "object" && HermesInternal !== null;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <AppHeader />
            {!usingHermes ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
          </ScrollView>
          <ProposalList style={styles.body} />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    fontFamily: "monospace",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
