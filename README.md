# Alchemy Deimos

A PoC for creating a mobile-first Alchemy


## Install everything

* clone this repository
* `npm run ci`


Go here https://facebook.github.io/react-native/docs/getting-started and look under "React Native ClI Quickstart" to install Android Studio

## Running the application (Android)

* start emulator in Android Studio (from )
* `npm run start` starts the Metro bundler
* `npm run android` build the Android application


## Running the application (IOS)

TBD


## THE PLAN

| Feature | Android | IOS | Remarks |
|---------|---------|---------|----|
| read from eth node |  &#9745; | &#9744;  
| read from eth node using websocket|  &#9745; | &#9744;  
| sign and send a transaction|  &#9745; | &#9744;  
| read data from subgraph |  &#9745; | &#9744;  
| subscribe to data from subgraph (websocket)|  &#9745; | &#9744;  
| read data from IPFS (using fetch) |  &#9745; | &#9744;  
| read data from IPFS (using IPFSClient) |  &#9744; | &#9744;  
| write data to IPFS |  &#9744; | &#9744;  
| create an Arc instance |  &#9744; | &#9744;  
| include portis, sign a tx | &#9744; | &#9744;  | the `@portis/web3` package is for use in the browser, using it throws `document is not defined`, perhaps from [here](https://github.com/portis-project/web-sdk/blob/master/packages/portis-web3/src/index.ts#L31)
| connect to a wallet with walletconnect and send a tx |  &#9744; | &#9744;  
| connect to a wallet with willectconnect and sign a  message |  &#9744; | &#9744;  
