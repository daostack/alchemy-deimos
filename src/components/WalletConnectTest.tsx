import Web3 from "web3";
import WalletConnect from "@walletconnect/react-native";
import { initWallet, sendTransaction } from "./WalletConnectHelpers";
import ActionTest from "./ActionTest";


class WalletConnectTest extends ActionTest {
  static navigationOptions = {
    title: "Connect with WalletConnect",
  };

  public description = "Connect with WalletConnect"

  public doit = async () => {
    this.setState({messages: []});

    const nativeOptions = {
      clientMeta: {
        description: "WalletConnect Demo App",
        url: "https://walletconnect.org",
        icons: ["https://walletconnect.org/walletconnect-logo.png"],
        name: "WalletConnect",
        ssl: true,
      },
    };
    this.log("connecting to  bridge");
    const walletConnector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
    }, nativeOptions);

    // Check if connection is already established
    if (!walletConnector.connected) {
      // create new session
      this.log("Already connected!");
      walletConnector.createSession().then(() => {
        const uri = walletConnector.uri;
        this.log(`URI: ${uri}`);
      });
    }

    // Subscribe to connection events
    walletConnector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Close QR Code Modal
      // WalletConnectQRCodeModal.close();

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0];
      this.log(`Connected: ${accounts}, ${chainId}`);
    });

    walletConnector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0];
      this.log(`Session Update: ${accounts}, ${chainId}`);
    });

    walletConnector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }
      this.log(`Disconnected: ${payload}`);

      // Delete walletConnector
    });
    console.log(walletConnector);
    await walletConnector.createSession();
    const address = await initWallet();
    this.log(`Address: ${address}`);
    const accounts = [address];
    const to = "0x5fB320886aF629122736c0e1a5c94dCE841EA37B";

    this.log("approveSession");
    await walletConnector.approveSession({
      accounts: accounts,
      chainId: 1,
    });

    const transaction = {
      from: address, // Required
      to, // Required
      gasLimit:"0x2DC6C0",
      gasPrice: "0x2DC6C0", // Required
      value: "1", // Required
      // data: "", // Required
      // nonce: "", // Required
    };
    const response = await sendTransaction(transaction);
    this.log(response);

  }

}
export default WalletConnectTest;
