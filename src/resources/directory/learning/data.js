const blockchain = [
  {
    name: "Binance Research",
    description:
      "Binance Research provides institutional-grade analysis, in-depth insights, and unbiased information to all participants in the digital asset industry.",
    website: "https://research.binance.com/",
  },
  {
    name: "Cointelligence Academy",
    description:
      "Cointelligence Academy provides free and paid online courses about blockchain and cryptocurrency topics, ranging from basic to advanced courses.",
    website: "https://www.cointelligence.com/",
  },
  {
    name: "Cryptopulsed",
    description:
      "Community curated directory of crypto resources, tools and services.",
    website: "https://www.cryptopulsed.com/",
  },
  {
    name: "DApp World",
    description:
      "DApp World is the premier destination for top-quality resources related to blockchain technology, with a particular focus on Ethereum.",
    website: "https://dappworld.com/",
  },
  {
    name: "DeFi Global (DFG) by Chris Blec",
    description:
      "DeFi Global (DFG) educates and informs non-developer users so that they can properly protect their interests in the brave new DeFi world.",
    website: "https://defiglobal.com/",
  },
  {
    name: "Experfy: Blockchain for Finance Professionals",
    description:
      "A course that provides an understanding of blockchain technology and how it relates to finance.",
    website: "https://www.experfy.com/",
  },
  {
    name: "B9Lab Introduction to Blockchain for Technical Executives",
    description:
      "B9Lab Academy offers blockchain education for technical executives.",
    website: "https://academy.b9lab.com/",
  },
  {
    name: "Udacity Blockchain Developer: Fundamentals",
    description:
      "Udacity's blockchain course prepares you to build blockchain-based projects for real-world application.",
    website: "https://www.udacity.com/",
  },
];
const ethereum = [
  {
    name: "A beginner's guide to Ethereum",
    description:
      "A comprehensive introduction to Ethereum for new users, hosted on Medium.",
    website: "https://medium.com/",
  },
  {
    name: "Attack Tower",
    description:
      "Learn how to hack Capture The Flag with this dApp Cryptography Trading Simulation.",
    website: "https://www.attacktower.com/",
  },
  {
    name: "An Introduction to Ethereum and Smart Contracts",
    description:
      "An Ethereum and Smart Contract guide, with a focus on decentralized apps.",
    website: "https://www.ethereum.org/",
  },
  {
    name: "BitDegree Learning Platform",
    description: "BitDegree offers beginner-friendly Solidity courses.",
    website: "https://www.bitdegree.org/",
  },
  {
    name: "Blockgeek guide to Ethereum",
    description:
      "Blockgeeks' guide to Ethereum, including guides for beginners.",
    website: "https://blockgeeks.com/",
  },
  {
    name: "Capture the Ether",
    description: "A fun game of Ethereum-based challenges for learners.",
    website: "https://capturetheether.com/",
  },
  {
    name: "CryptoZombies",
    description:
      "CryptoZombies is a free learning platform to teach Solidity through building your own crypto-collectible game.",
    website: "https://cryptozombies.io/",
  },
  {
    name: "DeFi Prime",
    description:
      "DeFi Prime provides resources, guides, and news about DeFi projects and tokens.",
    website: "https://defiprime.com/",
  },
  {
    name: "Eat The Blocks",
    description:
      "Eat The Blocks offers tutorials to become an Ethereum developer.",
    website: "https://www.eattheblocks.com/",
  },
  {
    name: "Ethereum Studio",
    description:
      "A platform to write, deploy, and test smart contracts on the Ethereum blockchain.",
    website: "https://studio.ethereum.org/",
  },
  {
    name: "Mastering Ethereum",
    description:
      "A guide to Ethereum by Andreas M. Antonopoulos, explaining the operations and architecture of Ethereum.",
    website: "https://www.oreilly.com/",
  },
];
const solana = [
  {
    name: "Solana Docs",
    description:
      "Official Solana documentation to learn and understand how Solana works.",
    website: "https://docs.solana.com/",
  },
  {
    name: "Solana Foundation",
    description:
      "The Solana Foundation provides resources, developer tools, and guides for building on Solana.",
    website: "https://solana.foundation/",
  },
  {
    name: "Buildspace: Solana Developer",
    description:
      "An interactive course to become a Solana developer by building real-world projects.",
    website: "https://buildspace.so/",
  },
  {
    name: "Solana Cookbook",
    description:
      "The Solana Cookbook is a developer resource that provides examples and guidance for building on Solana.",
    website: "https://solanacookbook.com/",
  },
];
const all = [...blockchain, ...ethereum, ...solana];

export default { blockchain, ethereum, solana, all };
