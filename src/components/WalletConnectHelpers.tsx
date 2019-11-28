/* https://github.com/WalletConnect/walletconnect-demo-app/blob/master/src/helpers/keychain.ts */
import {
  setInternetCredentials,
  getInternetCredentials,
  resetInternetCredentials,
} from "react-native-keychain";

export async function keychainSave(key: string, value: any) {
  const jsonValue = JSON.stringify(value);
  try {
    await setInternetCredentials(key, key, jsonValue);
    console.log(`Keychain: saved value for key: ${key}`);
  } catch (err) {
    console.log(`Keychain: failed to save value for key: ${key} error: ${err}`);
  }
}

export async function keychainLoad(key: string) {
  try {
    const data = await getInternetCredentials(key);
    if (data) {
      console.log(`Keychain: loaded value for key: ${key}`);
      const jsonValue = JSON.parse(data.password);
      return jsonValue;
    }
    console.log(`Keychain: value does not exist for key: ${key}`);
  } catch (err) {
    console.log(`Keychain: failed to load value for key: ${key} error: ${err}`);
  }
  return null;
}

export async function keychainDelete(key: string) {
  try {
    await resetInternetCredentials(key);
    console.log(`Keychain: removed value for key: ${key}`);
  } catch (err) {
    console.log(
      `Keychain: failed to remove value for key: ${key} error: ${err}`
    );
  }
}

/* https://github.com/WalletConnect/walletconnect-demo-app/blob/master/src/helpers/wallet.ts */
import * as ethers from "ethers";
// import { keychainSave, keychainLoad } from "./keychain";

const standardPath = "m/44'/60'/0'/0";

let activeIndex = 0;
let activeAccount: ethers.Wallet | null = null;
let addresses: string[] = [];

function generatePath() {
  const path = `${standardPath}/${activeIndex}`;
  return path;
}

function generateMnemonic() {
  const entropy = ethers.utils.randomBytes(16);
  debugger;
  const mnemonic = ethers.utils.HDNode.entropyToMnemonic(entropy);
  return mnemonic;
}

function generateAddresses(n = 10) {
  if (activeAccount) {
    const mnemonic = activeAccount.mnemonic;
    const array: string[] = [];
    const masterNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
    for (let i = 0; i < n; i++) {
      const path = `${standardPath}/${i}`;
      const account = masterNode.derivePath(path);
      const address = account.address;
      array.push(address);
    }

    return array;
  } else {
    console.error("No Active Account");
  }
  return [];
}

export async function initWallet() {

  console.log("init wallet");
  let account = await loadWallet();
  if (!account) {
    account = await createWallet();
  }
  activeIndex = 0;
  activeAccount = account;

  return account.address;
}

export async function createWallet() {
  const mnemonic = generateMnemonic();
  const path = generatePath();
  const account = ethers.Wallet.fromMnemonic(mnemonic, path);
  await saveMnemonic(mnemonic);

  return account;
}

export async function loadWallet() {
  // const mnemonic = await loadMnemonic();
  const mnemonic = "note family photo proud evolve whisper state allow actor jaguar lucky jealous patrol better warrior";
  console.log(`loaded menoment ${mnemonic}`);
  if (mnemonic) {
    const path = generatePath();
    const account = ethers.Wallet.fromMnemonic(mnemonic, path);
    return account;
  }
  return null;
}

export function getAllAddresses(n?: number) {
  addresses = generateAddresses(n);
  return addresses;
}

export function switchActiveAccount(index: number) {
  if (activeAccount) {
    activeIndex = index;
    const path = generatePath();
    activeAccount = ethers.Wallet.fromMnemonic(activeAccount.mnemonic, path);
    return activeAccount.address;
  } else {
    console.error("No Active Account");
  }
  return null;
}

export async function sendTransaction(transaction: any) {
  if (activeAccount) {
    const { hash } = await activeAccount.sendTransaction(transaction);
    return hash;
  } else {
    console.error("No Active Account");
  }
  return null;
}

export async function signMessage(message: any) {
  if (activeAccount) {
    const result = await activeAccount.signMessage(message);
    return result;
  } else {
    console.error("No Active Account");
  }
  return null;
}

// -- Keychain -------------------------------------------------------------- //

const mnemonicKey = "mnemonic";

export async function saveMnemonic(mnemonic: string) {
  await keychainSave(mnemonicKey, mnemonic);
}

export async function loadMnemonic() {
  const mnemonic = await keychainLoad(mnemonicKey);
  return mnemonic;
}
