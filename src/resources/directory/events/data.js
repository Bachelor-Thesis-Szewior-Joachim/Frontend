const past = [
  {
    name: "EDCON 2018",
    date: "03 May 2018",
    location: "Toronto, Canada",
    description:
      "The EDCON (Community Ethereum Development Conference) is the nonprofit global conference organized by LinkTime. The purpose of the conference is to improve communication and integration between the various global Ethereum communities.",
  },
  {
    name: "Ethereal Summit 2018",
    date: "11 May 2018",
    location: "New York, USA",
    description:
      "Ethereal Summit brings together thinkers from all walks of life to build our decentralized future using blockchain technology.",
  },
  {
    name: "Consensus 2018",
    date: "14 May 2018",
    location: "New York, USA",
    description:
      "Consensus 2018 will feature 250+ speakers and 4000+ attendees to build the foundations of the blockchain and digital currency economy.",
  },
  {
    name: "Token Summit III",
    date: "16 May 2018",
    location: "New York, USA",
    description:
      "Token Summit III is the third event in the Token Summit series, focusing on the best practices around blockchain-based tokens, protocols, and crypto-assets.",
  },
  {
    name: "Blockchain NW",
    date: "05 June 2018",
    location: "Seattle, USA",
    description:
      "Blockchain NW is the first event in Seattle, focusing on blockchain-based enterprises and technologies.",
  },
  {
    name: "World Blockchain Forum: Security Tokens & ICOs",
    date: "11 June 2018",
    location: "New York, USA",
    description:
      "World Blockchain Forum focuses on security tokens, ICOs, and the future of finance with insights from industry leaders.",
  },
  {
    name: "Korea Blockchain Summit",
    date: "12 July 2018",
    location: "Seoul, Korea",
    description:
      "Korea Blockchain Summit 2018 features case studies and technical discussions across multiple industries with a focus on blockchain technology.",
  },
  {
    name: "Beyond Blocks Summit Seoul",
    date: "17 July 2018",
    location: "Seoul, Korea",
    description:
      "Beyond Blocks Summit in Seoul brings together one of the largest hubs for blockchain and cryptocurrency in Asia.",
  },
  {
    name: "Bloconomic, ASEAN Blockchain Economic Summit 2018",
    date: "16 August 2018",
    location: "Kuala Lumpur, Malaysia",
    description:
      "Bloconomic Summit aims to connect blockchain industry leaders across ASEAN and Southeast Asia.",
  },
  {
    name: "Blockchain Summit: Singapore",
    date: "28 August 2018",
    location: "Singapore",
    description:
      "Blockchain Summit Singapore 2018 connects over 700 industry leaders, innovators, and investors in the blockchain space.",
  },
  {
    name: "ASEAN Blockchain Summit",
    date: "03 September 2018",
    location: "Kuala Lumpur, Malaysia",
    description:
      "ASEAN Blockchain Summit focuses on blockchain use cases and their impact on industries such as banking, finance, and healthcare.",
  },
  {
    name: "World Blockchain Forum - London",
    date: "03 September 2018",
    location: "London, England",
    description:
      "World Blockchain Forum London brings together thought leaders in finance to discuss the future of finance and blockchain technologies.",
  },
  {
    name: "ETHBerlin",
    date: "07 September 2018",
    location: "Berlin, Germany",
    description:
      "ETHBerlin is organized in collaboration with ETHGlobal and focuses on Ethereum technology.",
  },
  {
    name: "Consensus: Singapore 2018",
    date: "18 September 2018",
    location: "Marina Bay Sands, Singapore",
    description:
      "Consensus: Singapore 2018 attracts 8000+ attendees and provides enhanced networking opportunities.",
  },
  {
    name: "KL Blockchain Week",
    date: "24 September 2018",
    location: "Kuala Lumpur, Malaysia",
    description:
      "KL Blockchain Week brings together entrepreneurs, developers, and regulators to explore blockchain technology's future in Southeast Asia.",
  },
  {
    name: "Blocfest",
    date: "26 September 2018",
    location: "Malaysia, Kuala Lumpur",
    description:
      "Blocfest is Southeast Asia's premier blockchain event, focusing on innovation and technology.",
  },
  {
    name: "Devcon iv",
    date: "30 October 2018",
    location: "Prague, Czech Republic",
    description:
      "Devcon iv is one of the biggest Ethereum developer conferences worldwide.",
  },
  {
    name: "Decentralized",
    date: "14 November 2018",
    location: "Athens, Greece",
    description:
      "Decentralized 2018 gathers industry leaders and experts to discuss the implications of blockchain technology.",
  },
  {
    name: "Beyond Blocks Summit Bangkok",
    date: "26 November 2018",
    location: "Bangkok, Thailand",
    description:
      "Beyond Blocks Summit focuses on connecting innovators and investors in blockchain with offline and online platforms.",
  },
  {
    name: "Asia Blockchain Week",
    date: "27 November 2018",
    location: "Singapore",
    description:
      "Asia Blockchain Week brings together innovators, developers, and investors to explore the future of blockchain in Asia.",
  },
  {
    name: "Blockchain Connect Conference: Academic 2019",
    date: "11 January 2019",
    location: "San Francisco, USA",
    description:
      "Blockchain Connect Conference 2019 focuses on the academic and research-based developments of blockchain technology.",
  },
  {
    name: "AraCon",
    date: "29 January 2019",
    location: "Berlin, Germany",
    description:
      "AraCon brings together people who build and support the Aragon community to discuss decentralized governance.",
  },
  {
    name: "ETH Denver",
    date: "14 February 2019",
    location: "Denver, CO",
    description:
      "ETHDenver is a community gathering that focuses on distributed computing and blockchain innovation.",
  },
  {
    name: "ETH Paris",
    date: "08 March 2019",
    location: "Paris, France",
    description:
      "ETH Paris brings together over 500 developers, companies, and researchers to explore the future of Ethereum and Web3 technologies.",
  },
  {
    name: "TOKEN 2049 - Hong Kong",
    date: "13 March 2019",
    location: "Hong Kong",
    description:
      "TOKEN 2049 is the premier digital asset event in Asia, exploring token industry trends and opportunities.",
  },
];

const upcoming = [];

const all = [
  {
    name: "EDCON 2018",
    date: "03 May 2018",
    location: "Toronto, Canada",
    description:
      "The EDCON (Community Ethereum Development Conference) is the nonprofit global conference organized by LinkTime. The purpose of the conference is to improve communication and integration between the various global Ethereum communities.",
  },
  {
    name: "Ethereal Summit 2018",
    date: "11 May 2018",
    location: "New York, USA",
    description:
      "Ethereal Summit brings together thinkers from all walks of life to build our decentralized future using blockchain technology.",
  },
  {
    name: "Consensus 2018",
    date: "14 May 2018",
    location: "New York, USA",
    description:
      "Consensus 2018 will feature 250+ speakers and 4000+ attendees to build the foundations of the blockchain and digital currency economy.",
  },
  {
    name: "Token Summit III",
    date: "16 May 2018",
    location: "New York, USA",
    description:
      "Token Summit III is the third event in the Token Summit series, focusing on the best practices around blockchain-based tokens, protocols, and crypto-assets.",
  },
  {
    name: "Blockchain NW",
    date: "05 June 2018",
    location: "Seattle, USA",
    description:
      "Blockchain NW is the first event in Seattle, focusing on blockchain-based enterprises and technologies.",
  },
  {
    name: "World Blockchain Forum: Security Tokens & ICOs",
    date: "11 June 2018",
    location: "New York, USA",
    description:
      "World Blockchain Forum focuses on security tokens, ICOs, and the future of finance with insights from industry leaders.",
  },
  {
    name: "Korea Blockchain Summit",
    date: "12 July 2018",
    location: "Seoul, Korea",
    description:
      "Korea Blockchain Summit 2018 features case studies and technical discussions across multiple industries with a focus on blockchain technology.",
  },
  {
    name: "Beyond Blocks Summit Seoul",
    date: "17 July 2018",
    location: "Seoul, Korea",
    description:
      "Beyond Blocks Summit in Seoul brings together one of the largest hubs for blockchain and cryptocurrency in Asia.",
  },
  {
    name: "Bloconomic, ASEAN Blockchain Economic Summit 2018",
    date: "16 August 2018",
    location: "Kuala Lumpur, Malaysia",
    description:
      "Bloconomic Summit aims to connect blockchain industry leaders across ASEAN and Southeast Asia.",
  },
  {
    name: "Blockchain Summit: Singapore",
    date: "28 August 2018",
    location: "Singapore",
    description:
      "Blockchain Summit Singapore 2018 connects over 700 industry leaders, innovators, and investors in the blockchain space.",
  },
  {
    name: "ASEAN Blockchain Summit",
    date: "03 September 2018",
    location: "Kuala Lumpur, Malaysia",
    description:
      "ASEAN Blockchain Summit focuses on blockchain use cases and their impact on industries such as banking, finance, and healthcare.",
  },
  {
    name: "World Blockchain Forum - London",
    date: "03 September 2018",
    location: "London, England",
    description:
      "World Blockchain Forum London brings together thought leaders in finance to discuss the future of finance and blockchain technologies.",
  },
  {
    name: "ETHBerlin",
    date: "07 September 2018",
    location: "Berlin, Germany",
    description:
      "ETHBerlin is organized in collaboration with ETHGlobal and focuses on Ethereum technology.",
  },
  {
    name: "Consensus: Singapore 2018",
    date: "18 September 2018",
    location: "Marina Bay Sands, Singapore",
    description:
      "Consensus: Singapore 2018 attracts 8000+ attendees and provides enhanced networking opportunities.",
  },
  {
    name: "KL Blockchain Week",
    date: "24 September 2018",
    location: "Kuala Lumpur, Malaysia",
    description:
      "KL Blockchain Week brings together entrepreneurs, developers, and regulators to explore blockchain technology's future in Southeast Asia.",
  },
  {
    name: "Blocfest",
    date: "26 September 2018",
    location: "Malaysia, Kuala Lumpur",
    description:
      "Blocfest is Southeast Asia's premier blockchain event, focusing on innovation and technology.",
  },
  {
    name: "Devcon iv",
    date: "30 October 2018",
    location: "Prague, Czech Republic",
    description:
      "Devcon iv is one of the biggest Ethereum developer conferences worldwide.",
  },
  {
    name: "Decentralized",
    date: "14 November 2018",
    location: "Athens, Greece",
    description:
      "Decentralized 2018 gathers industry leaders and experts to discuss the implications of blockchain technology.",
  },
  {
    name: "Beyond Blocks Summit Bangkok",
    date: "26 November 2018",
    location: "Bangkok, Thailand",
    description:
      "Beyond Blocks Summit focuses on connecting innovators and investors in blockchain with offline and online platforms.",
  },
  {
    name: "Asia Blockchain Week",
    date: "27 November 2018",
    location: "Singapore",
    description:
      "Asia Blockchain Week brings together innovators, developers, and investors to explore the future of blockchain in Asia.",
  },
  {
    name: "Blockchain Connect Conference: Academic 2019",
    date: "11 January 2019",
    location: "San Francisco, USA",
    description:
      "Blockchain Connect Conference 2019 focuses on the academic and research-based developments of blockchain technology.",
  },
  {
    name: "AraCon",
    date: "29 January 2019",
    location: "Berlin, Germany",
    description:
      "AraCon brings together people who build and support the Aragon community to discuss decentralized governance.",
  },
  {
    name: "ETH Denver",
    date: "14 February 2019",
    location: "Denver, CO",
    description:
      "ETHDenver is a community gathering that focuses on distributed computing and blockchain innovation.",
  },
  {
    name: "ETH Paris",
    date: "08 March 2019",
    location: "Paris, France",
    description:
      "ETH Paris brings together over 500 developers, companies, and researchers to explore the future of Ethereum and Web3 technologies.",
  },
  {
    name: "TOKEN 2049 - Hong Kong",
    date: "13 March 2019",
    location: "Hong Kong",
    description:
      "TOKEN 2049 is the premier digital asset event in Asia, exploring token industry trends and opportunities.",
  },
];

export default { past, upcoming, all };
