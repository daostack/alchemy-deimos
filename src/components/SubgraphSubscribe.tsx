import {  InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient} from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import gql from "graphql-tag";
// import fetch from "isomorphic-fetch";
import { settings } from "../settings";
import ActionTest from "./ActionTest";

class SubgraphSubscribe extends ActionTest {
  static navigationOptions = {
    title: "Get some data from the subgraph",
  };

  public description = "Get data from the IPFS using IPFSClient"

  public doit = async () => {
    this.setState({messages: []});
    const options = settings.production;
    this.log(`creating apollo client instance, connecting to ${options.graphqlWsProvider}`);
    const wsLink = new WebSocketLink({
      options: {
        reconnect: true,
      },
      uri: options.graphqlWsProvider,
      webSocketImpl: WebSocket,
    });

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: wsLink,
    });
    this.log("fetching data - getting a list of daos");
    const query  = gql`subscription latestEvents {
      events (first: 2) {
        id
        type
      }
    }
    `;

    const watchQuery = await client.subscribe({query, fetchResults: true});
    watchQuery.subscribe((data) => {
      this.log(JSON.stringify(data.data.events));
    });
    this.log("subscription done; results shoudl appear below");
  }

}
export default SubgraphSubscribe;
