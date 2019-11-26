import {  InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient} from "apollo-client";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import fetch from "isomorphic-fetch";
import { settings } from "../settings";
import ActionTest from "./ActionTest";

class IPFSGet extends ActionTest {
  static navigationOptions = {
    title: "Get some data from the subgraph",
  };

  public description = "Get data from the IPFS using IPFSClient"

  public doit = async () => {
    this.setState({messages: []});
    const options = settings.production;
    this.log(`creating apollo client instance, connection to ${options.graphqlHttpProvider}`);
    const httpLink = new HttpLink({
      credentials: "same-origin",
      fetch,
      uri: options.graphqlHttpProvider,
    });

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: httpLink,
    });
    this.log("fetching data - getting a list of daos");
    const query  = gql`query allDaos {
      daos {
        id
        name
      }
    }
    `;

    const data = await client.query({query});
    this.log(JSON.stringify(data));
    this.log("done!!");
  }

}
export default IPFSGet;
