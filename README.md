# Class Election Smart Contract

## Overview
This Ethereum-based smart contract enables a voting system where participants can either vote for various people directly or delegate their votes to another voter. It is designed to ensure a transparent and secure voting process, preventing issues such as double voting and delegation loops.

## Features
- **Vote Delegation:** Allows voters to delegate their votes to someone else, ensuring their vote counts even if they cannot participate directly.
- **Weighted Voting:** Each voter can have a weight associated with their vote, enhancing the influence of certain votes as determined by the chairperson.
- **Proposal Addition:** Voters can vote on a set of predefined proposals added at the time of contract deployment.
- **Security Checks:** Includes multiple security checks to prevent unauthorized actions and to ensure the integrity of the voting process.
- **Determining Winners:** The contract includes functions to determine the proposal with the most votes and to retrieve the name of the winning proposal.


This smart contract forms the backbone of a decentralized application (dApp) aimed at conducting secure and verifiable voting processes on the Ethereum network.
