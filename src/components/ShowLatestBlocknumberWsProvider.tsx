import ActionTest from "./ActionTest";

const Web3 = require("web3");

class ShowLatestBlocknumberWsProvider extends ActionTest {
  static navigationOptions = {
    title: "Get the latest block number using Web3s HttpProvider",
  };

  public description = "This will test getting data using the Webscocket provider of web3"

  public doit = async () => {
    this.setState({messages: []});

    const web3 = new Web3(
      new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/e0cdf3bfda9b468fa908aa6ab03d5ba2"),
    );
    this.log("fetching blocknumber...");
    const latestBlock = await web3.eth.getBlock("latest");
    this.log(`Latest blocknumber: ${latestBlock.number}`);
    this.log("done!!");
  }

}
export default ShowLatestBlocknumberWsProvider;
