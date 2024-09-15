const carrers = [
  {
    name: "Blockew",
    description: "The #1 job board to find cryptocurrency jobs.",
    website: "https://blockew.com/",
  },
  {
    name: "Crypto Careers",
    description:
      "Crypto Careers is a job board aimed at enabling companies and professionals to build the future with blockchain technology.",
    website: "https://www.cryptocareers.com/",
  },
  {
    name: "Crypto Jobs List",
    description:
      "Crypto Jobs List is your #1 board to find and post blockchain jobs. Blockchain engineers, Solidity devs, crypto experts.",
    website: "https://cryptojobslist.com/",
  },
  {
    name: "Cryptocurrency Jobs",
    description:
      "The leading blockchain and cryptocurrency job board on the web.",
    website: "https://www.cryptocurrencyjobs.co/",
  },
  {
    name: "CryptoJobs",
    description: "CryptoJobs is the job site for blockchain jobs.",
    website: "https://crypto.jobs/",
  },
  {
    name: "CryptoJobster",
    description:
      "CryptoJobster curates the best new blockchain jobs at leading companies and startups that use blockchain technology.",
    website: "https://www.crypto-jobster.com/",
  },
  {
    name: "Nine to Three",
    description:
      "Nine to Three is a job board for Web3 and cryptocurrency jobs. Ready to find your dream crypto job?",
    website: "https://nineto-three.io/",
  },
];
const allOthers = [
  {
    name: "Aion Grant Program",
    description:
      "Aion Incentive Program includes a grant initiative, funding projects that range from tools, products to community education and core protocol development.",
    website: "https://aion.org/",
  },
  {
    name: "AngelBlock",
    description:
      "AngelBlock is purpose-built to empower startups, safeguard investors, and contribute to the collective advancement of the DeFi ecosystem.",
    website: "https://angelblock.com/",
  },
  {
    name: "Aragon Nest",
    description:
      "The goal of the program is to attract talent to research and build the necessary tooling for developing solutions around Aragon and Ethereum.",
    website: "https://nest.aragon.org/",
  },
  {
    name: "Blockstack Social Network Fund",
    description:
      "Blockstack is taking a stand and leading a commitment to fund social network dapps that rewrite the fundamental basis of how we connect.",
    website: "https://blockstack.org/",
  },
  {
    name: "Builder by Nomic Labs",
    description:
      "Builder is a task runner for Ethereum smart contract developers.",
    website: "https://nomiclabs.io/",
  },
  {
    name: "Bulk token sending",
    description:
      "Allows conducting Airdrop very quickly. CSV import and bulk sending is available.",
    website: "https://bulk-token-sender.com/",
  },
  {
    name: "Chainstack",
    description:
      "Chainstack allows anyone to launch its own Ethereum node within minutes.",
    website: "https://chainstack.com/",
  },
  {
    name: "Coinage Solidifier",
    description:
      "Takes Solidity code and flattens it into a concatenated version ready for Etherscan’s verification tool.",
    website: "https://coinage.com/",
  },
  {
    name: "CryptoView",
    description:
      "CryptoView is a trading and portfolio management platform with multi-exchange support.",
    website: "https://cryptoview.com/",
  },
  {
    name: "DAppNode",
    description:
      "More than 70% of Ethereum nodes are hosted in VPSs. With DAppNode, any user can maintain their own nodes, jumping into the real p2p economy.",
    website: "https://dappnode.io/",
  },
  {
    name: "Ether Address Lookup",
    description:
      "Automatically adds links to strings that look like Ethereum addresses so you can quickly look them up on your favorite block explorer.",
    website: "https://etheraddresslookup.com/",
  },
  {
    name: "Ethereum Foundation Grants",
    description:
      "Ethereum Foundation seeks to support dapps and smart contracts on the Ethereum blockchain through R&D, developer experience, and education.",
    website: "https://ethereum.org/grants/",
  },
  {
    name: "Ethermine Flattener",
    description: "Solidity smart contract flattener by Ethermine.",
    website: "https://ethermine.org/",
  },
  {
    name: "Etherscan Java API implementation",
    description:
      "Etherscan Java API implementation library supports all available EtherScan API calls for all available Ethereum Networks.",
    website: "https://etherscan.io/",
  },
  {
    name: "ETHPrize",
    description:
      "ETHPrize is a research and bounty project identifying the most critical issues facing the Ethereum ecosystem.",
    website: "https://ethprize.org/",
  },
  {
    name: "HashEx",
    description:
      "Online ABI encoding service for Solidity smart contracts by HashEx.",
    website: "https://hashex.org/",
  },
  {
    name: "Remix",
    description:
      "A powerful open-source tool for writing Solidity contracts straight from the browser.",
    website: "https://remix.ethereum.org/",
  },
  {
    name: "Rotki",
    description:
      "Open-source asset analytics, tracking, management, and tax reporting application to take ownership of your financial data.",
    website: "https://rotki.com/",
  },
  {
    name: "SmartCheck",
    description:
      "Automatically checks Solidity smart contracts for vulnerabilities and bad practices.",
    website: "https://smartcheck.io/",
  },
];
const grants = [
  {
    name: "Protocol Labs Research",
    description:
      "Launching a Request For Proposals (RFP) Program with an initial commitment of $5,000,000 to fund multiple rounds of grants.",
    website: "https://protocol.ai/",
  },
  {
    name: "The Interchain Foundation (ICF)",
    description:
      "Supports the development of Cosmos Network through R&D and implementation efforts.",
    website: "https://interchain.io/",
  },
  {
    name: "The Stable Fund",
    description:
      "Investment fund started by L4, in partnership with MakerDAO, helping startups with business development, financing, and strategic introductions.",
    website: "https://stable.fund/",
  },
  {
    name: "UNICEF Funding Opportunity for Blockchain Start-ups",
    description:
      "UNICEF is looking to make $50-90K equity-free investments to provide early stage finance for blockchain start-ups.",
    website: "https://unicef.org/innovation/funding",
  },
];
const tools = [
  {
    name: "sol-profiler",
    description: "Lists down Solidity Smart Contract Methods Attributes.",
    website: "https://sol-profiler.org/",
  },
  {
    name: "Sol-Verifier",
    description: "An NPM package to verify Solidity contracts on Etherscan.",
    website: "https://sol-verifier.com/",
  },
  {
    name: "Solidity Visual Auditor",
    description:
      "A VSCode extension contributing security-centric syntax and highlighting.",
    website: "https://solidityauditor.com/",
  },
  {
    name: "Solt Solidity Tool",
    description:
      "Allows you to output Solidity standard json and verify contracts directly.",
    website: "https://soliditytools.com/",
  },
  {
    name: "Tenderly",
    description:
      "Real-time monitoring, alerting, and troubleshooting for smart contracts.",
    website: "https://tenderly.dev/",
  },
  {
    name: "Truffle Framework",
    description:
      "Sweet tools for smart contracts, helping developers go from idea to dapp with ease.",
    website: "https://trufflesuite.com/",
  },
  {
    name: "UPPward by Sentinel Protocol",
    description:
      "UPPward browser extension uses intelligence data in the Threat Reputation Database to alert investors of potential scams.",
    website: "https://sentinelprotocol.io/",
  },
  {
    name: "WalletConnect",
    description:
      "Open protocol for connecting desktop Dapps to mobile wallets using end-to-end encryption via a QR code.",
    website: "https://walletconnect.org/",
  },
];

const all = [...carrers, ...tools, ...grants];

export default { carrers, tools, grants, all };
