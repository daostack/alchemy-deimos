import ActionTest from "./ActionTest";

const Web3 = require("web3");

class ShowLatestBlocknumber extends ActionTest {
  static navigationOptions = {
    title: "Get the latest block number using Web3s HttpProvider",
  };

  public description = "This test fetching data from infura using the web3 http provider"

  public doit = async () => {

    this.state.messages = [];
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://mainnet.infura.io/"),
    );
    this.log("fetching blocknumber...");
    const latestBlock = await web3.eth.getBlock("latest");
    this.log(`Latest blocknumber: ${latestBlock.number}`);
    this.log("done!!");
  }

}
export default ShowLatestBlocknumber;
