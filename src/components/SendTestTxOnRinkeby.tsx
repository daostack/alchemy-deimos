import ActionTest from "./ActionTest";

const Web3 = require("web3");

class SendTestTxOnRinkeby extends ActionTest {
  static navigationOptions = {
    title: "Sign and send a transaction",
  };

  public description = "This sends 1WEI from between two rinkeby accountsl"

  public doit = async () => {
    this.setState({messages: []});
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://rinkeby.infura.io/"),
    );
    // private key of ganache default account 0x00CE9f285d98f79B6Ee9030e4E8F812650Aa7E66
    // which should ahve some eth on rinkeby

    const privateKey = "0xCE45568068B955AA712DB75B22AB4A753AD68ECE26E0EAD33CBB61BD9ADA07B3";
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);

    web3.eth.accounts.wallet.add(account);
    console.log(web3.eth.accounts.wallet);
    console.log(`sending from ${account.address}`);
    const to = "0x5fB320886aF629122736c0e1a5c94dCE841EA37B";
    const value = 1;
    const receipt = await web3.eth.sendTransaction({
      from: account.address,
      to,
      value, // send 1 WEI
      gas:"0x2DC6C0",
    })
      .on("transactionHash", (transactionHash) => this.log(`Sending transaction\n(${value} WEI to ${to})\n with hash ${transactionHash}; plz wait..`))
      .on("receipt", (receipt) => this.log("Transaction was mined"))
      .on("error", (error) => this.log(`An error occurred :-(( : ${err.message}`));
    this.log(`Tx was mined, this the receipt ${receipt}`);
    this.log("done..");
  }
}
export default SendTestTxOnRinkeby;
