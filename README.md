# Lending and Borrowing Decentralized App

This project is a fusion of [Create React App](https://github.com/facebook/create-react-app) and [Hardhat](https://hardhat.org/) to create a decentralized lending and borrowing application.

## Features

### Connect Wallet
- Connect Wallet with MetaMask

### Dashboard
- Add dashboard features here

### Lend Funds
- Describe the lending functionality

### Borrow Funds
- Explain how users can borrow funds

### Repayment
- Describe the repayment process

## Technology Stack

This project utilizes a diverse technology stack:

- **JavaScript (React JS):** Powering the user interface.
- **Redux Toolkit:** Facilitating efficient state management.
- **Material UI:** Enhancing the user experience with stylish and responsive UI components.
- **Blockchain:** Serving as the foundation for our decentralized application.
- **Hardhat:** Providing a robust development environment for Ethereum smart contracts.
- **Solidity:** The primary language for crafting smart contracts.
- **ChainLink:** Enabling decentralized oracles.
- **IPFS:** Enabling decentralized storage.

## How to Use

In the project directory, you can run the following commands:

### `npm start`

Launches the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to interact with it. The page will automatically reload as you make code changes, and any lint errors will be displayed in the console.

### `npx hardhat compile`

Compile the Solidity smart contracts with this command.

### `npx hardhat run scripts/deploy.js --network sepolia`

Deploy the smart contract to the Sepolia Test Network using this command.

## Important Notes

1. Create a `.env` file to securely store your private key and Alchemy API key URL.

2. In the frontend's `index.js` file, remember to include your ABI file and the address of the deployed smart contract.
