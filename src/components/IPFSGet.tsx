import { Image } from "react-native";
import { settings } from "../settings";
import ActionTest from "./ActionTest";

const IPFSClient = require("ipfs-http-client");

class SubgraphGet extends ActionTest {
  static navigationOptions = {
    title: "Get some data from the IPFS network (using fetch, not the ipfsclient)",
  };

  public description = "Get data from the IPFS network"

  public doit = async () => {
    this.state.messages = [];
    // const options = settings.production;
    // const ipfsProvider = options.ipfsProvider;
    // const ipfsProvider = "https:/ipfs.io/api/v0";
    // this.log(`creating IPFS client instance, connection to ${ipfsProvider}`);
    // this.log(ipfsProvider);
    // console.log(ipfsProvider);
    // const ipfs = IPFSClient(ipfsProvider);
    // const ipfs = new IPFSClient(ipfsProvider);
    const url = "https://gateway.ipfs.io/ipfs/QmXExS4BMc1YrH6iWERyryFcDWkvobxryXSwECLrcd7Y1H";
    this.log(`Fetching url ${url}`);
    let response;
    try {
      response = await fetch(url);
    } catch(err) {
      this.log(`ERROR: ${err.message}`);
    }
    this.log(`Reponse status code: ${response.status}`);
    this.log("Fetching the iamge, please wait until you see some gibberish starting with PNG below:");
    const content = await response.text();

    this.log(JSON.stringify(content).substring(0,100)  + "...");
    // const ipfsPath = "/ipfs/QmXExS4BMc1YrH6iWERyryFcDWkvobxryXSwECLrcd7Y1H";
    // this.log(`getting try file at ${ipfsPath}, please be patient..`);
    // console.log(ipfsProvider);
    // let contents;
    // try {
    //   contents = await ipfs.get(ipfsPath);
    // } catch(err) {
    //   console.log(err);
    //   this.log(`An error occurred: ${err.message}`);
    // }
    // this.log(JSON.stringify(contents));
    this.log("done");
  }

}
export default SubgraphGet;
