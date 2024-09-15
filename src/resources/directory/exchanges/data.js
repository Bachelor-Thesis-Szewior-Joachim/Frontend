const crypto = [
  {
    name: "Binance",
    description:
      "Binance is one of the most popular cryptocurrency exchanges that provide access to hundreds of digital currency pairs while maintaining security, liquidity, and high-speed trading.",
    website: "https://www.binance.com/",
  },
  {
    name: "Bitfinex",
    description:
      "Bitfinex is a full-featured spot trading platform for major digital assets & cryptocurrencies, owned and operated by iFinex Inc. The exchange also offers leveraged margin trading.",
    website: "https://www.bitfinex.com/",
  },
  {
    name: "OKX",
    description:
      "Discover crypto, on top of one of the world’s most reliable crypto trading & web3 platforms.",
    website: "https://www.okx.com/",
  },
  {
    name: "365Cash",
    description:
      "The exchange service in the CIS specializes in buying and selling BTC, ETH, and other cryptocurrencies for fiat and electronic payment systems. Works since 2015.",
    website: "https://www.365cash.co/",
  },
  {
    name: "6x",
    description:
      "Founded in Singapore, 6X is a digital asset trading platform for professional users around the world, providing a variety of transactions between digital assets and over-the-counter transactions.",
    website: "https://www.6x.com/",
  },
  {
    name: "Kraken",
    description:
      "Kraken is a US-based cryptocurrency exchange, founded in 2011, offering a range of fiat-to-crypto trading and a focus on security.",
    website: "https://www.kraken.com/",
  },
  {
    name: "Coinbase",
    description:
      "Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more.",
    website: "https://www.coinbase.com/",
  },
  {
    name: "KuCoin",
    description:
      "KuCoin is a global cryptocurrency exchange for numerous digital assets and cryptocurrencies, providing an exchange service for users globally.",
    website: "https://www.kucoin.com/",
  },
  {
    name: "Gemini",
    description:
      "Gemini is a US-based regulated cryptocurrency exchange that offers access to a large selection of cryptocurrencies for buying, selling, and storing.",
    website: "https://www.gemini.com/",
  },
  {
    name: "Huobi",
    description:
      "Huobi is a cryptocurrency exchange providing spot trading, derivatives trading, staking, and lending services.",
    website: "https://www.huobi.com/",
  },
  {
    name: "FTX",
    description:
      "FTX is a cryptocurrency exchange built by traders for traders, offering innovative products including industry-first derivatives, options, volatility products, and more.",
    website: "https://www.ftx.com/",
  },
  {
    name: "Bitstamp",
    description:
      "Bitstamp is one of the world's longest-standing cryptocurrency exchanges, providing reliable trading services since 2011.",
    website: "https://www.bitstamp.net/",
  },
  {
    name: "Bithumb",
    description:
      "Bithumb is a South Korean cryptocurrency exchange providing a large range of cryptocurrencies for trade with a focus on the Korean market.",
    website: "https://www.bithumb.com/",
  },
  {
    name: "Gate.io",
    description:
      "Gate.io is one of the oldest and largest exchanges, offering over 1,400 cryptocurrencies for trading and an array of financial products.",
    website: "https://www.gate.io/",
  },
  {
    name: "Poloniex",
    description:
      "Poloniex is a cryptocurrency exchange offering advanced trading features for both spot and margin trading.",
    website: "https://www.poloniex.com/",
  },
  {
    name: "Bybit",
    description:
      "Bybit is a global cryptocurrency exchange that offers trading in derivatives and perpetual contracts as well as spot trading.",
    website: "https://www.bybit.com/",
  },
  {
    name: "Probit",
    description:
      "ProBit is a Korean cryptocurrency exchange providing services globally with hundreds of altcoins available.",
    website: "https://www.probit.com/",
  },
  {
    name: "ZB.com",
    description:
      "ZB.com is a cryptocurrency exchange providing a secure and reliable platform for traders worldwide, focusing on the Chinese market.",
    website: "https://www.zb.com/",
  },
  {
    name: "HitBTC",
    description:
      "HitBTC is a European cryptocurrency exchange offering a variety of trading pairs and features for both new and experienced traders.",
    website: "https://www.hitbtc.com/",
  },
  {
    name: "Upbit",
    description:
      "Upbit is a South Korean cryptocurrency exchange with global reach, offering a wide selection of cryptocurrencies for trading.",
    website: "https://www.upbit.com/",
  },
];

const dex = [
  {
    name: "Rhino.fi",
    description:
      "Rhinofi allows users to explore all the best DeFi opportunities from one self-custodial layer 2 wallet.",
    website: "https://www.rhino.fi/",
  },
  {
    name: "Uniswap (V2)",
    description:
      "Uniswap V2 has many new features and technical improvements compared with Uniswap V1 including ERC20 / ERC20 Pairs, Price Oracles, Flash Swaps, and much more!",
    website: "https://uniswap.org/",
  },
  {
    name: "1inch",
    description:
      "1inch.Exchange is a user-friendly DEX aggregator that connects to other DEXs for better pricing and executes trades in a single transaction.",
    website: "https://1inch.io/",
  },
  {
    name: "Airswap",
    description:
      "AirSwap is a marketplace powered by search. Buyers, sellers, people, and programs can connect and trade wallet to wallet using smart contracts.",
    website: "https://www.airswap.io/",
  },
  {
    name: "Allbit",
    description:
      "Allbit is a blockchain commercial service that provides a fully decentralized trading experience without the delegation of assets.",
    website: "https://www.allbit.io/",
  },
  {
    name: "Balancer",
    description:
      "Balancer is an automated portfolio manager, liquidity provider, and price sensor.",
    website: "https://balancer.fi/",
  },
  {
    name: "Bancor Network",
    description:
      "Bancor allows you to convert between any two tokens on the network, with no counterparty, at an automatically calculated price.",
    website: "https://www.bancor.network/",
  },
  {
    name: "Bebop",
    description:
      "Bebop is a decentralized trading platform that aims to deliver a breakthrough in user experience for trading in DeFi.",
    website: "https://www.bebop.xyz/",
  },
  {
    name: "Binance DEX",
    description:
      "The dual-chain architecture of Binance Chain and Binance Smart Chain empowers you to build your own decentralized apps and digital assets on one blockchain.",
    website: "https://www.binance.org/",
  },
  {
    name: "Bitcratic",
    description:
      "Bitcratic is here to empower the decentralized exchange. It is a decentralized exchange for ERC20 tokens with off-chain order book and on-chain settlement.",
    website: "https://www.bitcratic.com/",
  },
  {
    name: "Blockonix",
    description:
      "Blockonix is based on the Ethereum Protocol and allows trading of Ethereum tokens in a decentralized manner.",
    website: "https://www.blockonix.com/",
  },
  {
    name: "Capital DEX",
    description:
      "Capital DEX is a decentralized legally protected exchange primarily for security tokens.",
    website: "https://www.capitaldex.com/",
  },
  {
    name: "Clipper",
    description:
      "Clipper is the decentralized exchange (DEX) built to give the self-made crypto trader the best possible prices on small trades.",
    website: "https://www.clipper.exchange/",
  },
  {
    name: "CoinChangeX",
    description:
      "CoinChangeX is a decentralized Ethereum Token Exchange that allows users to securely trade ETH and Ethereum-based tokens.",
    website: "https://www.coinchangex.com/",
  },
  {
    name: "Compound Finance",
    description:
      "Compound is an algorithmic, autonomous interest rate protocol built for developers.",
    website: "https://www.compound.finance/",
  },
  {
    name: "Cybex DEX",
    description: "Cybex Decentralized Exchange.",
    website: "https://www.cybex.io/",
  },
  {
    name: "DDEX",
    description:
      "User-friendly decentralized exchange for Ethereum-based tokens.",
    website: "https://www.ddex.io/",
  },
  {
    name: "dex.blue",
    description:
      "dex.blue is a high-performance decentralized exchange that delivers the best non-custodial crypto trading.",
    website: "https://www.dex.blue/",
  },
  {
    name: "DEX.top",
    description:
      "DEX.top features instant trading on-chain with the lowest gas cost.",
    website: "https://www.dex.top/",
  },
  {
    name: "DINNGO Exchange",
    description:
      "DINNGO is a reliable decentralized exchange with the best user experience that you deserve.",
    website: "https://www.dinngo.com/",
  },
  {
    name: "Erc dEX",
    description: "Peer-to-peer trading on Ethereum.",
    website: "https://www.ercdex.com/",
  },
  {
    name: "EthEx",
    description: "Buy and sell ERC20 tokens in a single transaction.",
    website: "https://www.ethextoken.com/",
  },
  {
    name: "Everbloom",
    description:
      "Everbloom is a decentralized cryptocurrency exchange focused on the security and reliability of Ethereum-based ERC20 tokens.",
    website: "https://www.everbloom.co/",
  },
  {
    name: "Forkdelta",
    description:
      "ForkDelta is a decentralized Ethereum Token Exchange. We have the most tokens and the highest liquidity.",
    website: "https://www.forkdelta.app/",
  },
  {
    name: "HalalDEX",
    description:
      "HalalDEX is a cutting-edge technology giving Shari'ah concerned investors an opportunity to invest in Shari'ah Compliant ERC20 Tokens.",
    website: "https://www.halaldex.com/",
  },
];

const fiat = [
  {
    name: "Bitstamp",
    description:
      "Bitstamp is one of the most popular fiat to Bitcoin exchanges. It was founded as a European-focused alternative to Mt. Gox and has been in existence since 2011.",
    website: "https://www.bitstamp.net/",
  },
  {
    name: "Cex.io",
    description:
      "Established in 2013 as the first cloud mining provider, CEX.IO has become a multi-functional cryptocurrency exchange, trusted by over a million users.",
    website: "https://cex.io/",
  },
  {
    name: "Changelly",
    description:
      "Changelly is a popular cryptocurrency exchange providing the ability to instantly and seamlessly exchange over 100 altcoins at the best market rate.",
    website: "https://changelly.com/",
  },
  {
    name: "ChangeNOW",
    description:
      "ChangeNOW is a non-custodial exchange service. We strive for maximum safety, simplicity, and convenience. You can buy cryptocurrency with Visa or MasterCard.",
    website: "https://changenow.io/",
  },
  {
    name: "Coinbase Pro",
    description:
      "Coinbase Pro offers individuals the ability to trade a variety of digital assets on a secure, insurance-backed platform.",
    website: "https://pro.coinbase.com/",
  },
  {
    name: "Gemini",
    description:
      "Gemini is a licensed digital asset exchange and custodian. Started by the Winklevoss twins in 2015, Gemini became the world’s first licensed ether exchange in 2016.",
    website: "https://gemini.com/",
  },
  {
    name: "Kraken",
    description:
      "Founded in 2011, San Francisco-based Kraken is the largest Bitcoin exchange in euro volume and liquidity, also trading in Canadian dollars, US dollars, and more.",
    website: "https://kraken.com/",
  },
  {
    name: "Liquid",
    description:
      "Liquid is a unified, globally-sourced trading platform that bridges the worlds of fiat and crypto.",
    website: "https://www.liquid.com/",
  },
  {
    name: "Luno",
    description:
      "Luno makes it safe and easy to buy, store, and learn about digital currencies like Bitcoin and Ethereum in Malaysia.",
    website: "https://www.luno.com/",
  },
  {
    name: "ShapeShift",
    description:
      "ShapeShift is a web and API platform founded in 2014 to provide instant Bitcoin and altcoin conversion with maximum efficiency.",
    website: "https://shapeshift.com/",
  },
  {
    name: "Artis Turba",
    description:
      "Artis Turba is a South African Crypto-FIAT and Crypto-Crypto Exchange allowing users to buy Bitcoin, Ethereum, and Ripple with South African Rands.",
    website: "https://artis-turba.com/",
  },
  {
    name: "BitAsset",
    description:
      "BitAsset is a cryptocurrency exchange located in Hong Kong and was established in 2018.",
    website: "https://www.bitasset.com/",
  },
  {
    name: "BitcoinVN",
    description:
      "Buy and sell Ether and other digital assets securely on the most trusted cryptocurrency exchange in Vietnam.",
    website: "https://bitcoinvn.io/",
  },
  {
    name: "Bitexbook",
    description:
      "Bitexbook is the crypto-currency exchange that appreciates the time of its customers. Instant deposit and withdrawal in an hour, verification in 24 hours.",
    website: "https://bitexbook.com/",
  },
  {
    name: "BitexLive",
    description:
      "Based in Turkey, BitexLive provides a fast, dependable, and user-friendly trading platform.",
    website: "https://bitexlive.com/",
  },
  {
    name: "BitoPro",
    description:
      "BitoEX offers local digital currency services, with excellent branding and ease of access, focusing on the Taiwanese market.",
    website: "https://www.bitopro.com/",
  },
  {
    name: "Bitso",
    description:
      "Based in Mexico, Bitso is a platform for trading Bitcoin with Mexican Pesos, offering a high level of professionalism and security.",
    website: "https://bitso.com/",
  },
  {
    name: "Bitsen",
    description:
      "Bitsen is a cryptocurrency exchange based in Indonesia, established in 2017.",
    website: "https://bitsen.com/",
  },
  {
    name: "Bity",
    description:
      "Bity is a Swiss-based fintech startup simplifying the conversion from traditional money to cryptocurrencies and digital assets.",
    website: "https://bity.com/",
  },
  {
    name: "BTC-Alpha",
    description:
      "BTC-Alpha offers trading in numerous digital coins and supports USD fiat currency. Its trading platform is web-based with charts by TradingView.",
    website: "https://btc-alpha.com/",
  },
  {
    name: "BTCMarkets",
    description:
      "BTC Markets offers a secure and reliable trading platform for professional investors, businesses, and anyone interested in trading across Australia.",
    website: "https://btcmarkets.net/",
  },
  {
    name: "BTSE",
    description:
      "BTSE is a multi-currency digital assets exchange and derivatives platform bridging the gap between fiat markets and digital assets.",
    website: "https://btse.com/",
  },
  {
    name: "Bvnex",
    description:
      "Bvnex exchange is a cryptocurrency exchange located in Vietnam, established in 2018.",
    website: "https://bvnex.com/",
  },
  {
    name: "ChainEX",
    description:
      "ChainEX is a digital currency platform where South African traders can buy, sell, or trade almost 30 digital assets using ZAR as fiat currency.",
    website: "https://www.chainex.io/",
  },
  {
    name: "Citex",
    description:
      "CITEX is a peer-to-peer digital asset trading platform with the aim to open up a full process for trading, payment, and transaction of legal currencies.",
    website: "https://citex.io/",
  },
];

const all = [
  {
    name: "Bitstamp",
    description:
      "Bitstamp is one of the most popular fiat to Bitcoin exchanges. It was founded as a European-focused alternative to Mt. Gox and has been in existence since 2011.",
    website: "https://www.bitstamp.net/",
  },
  {
    name: "Cex.io",
    description:
      "Established in 2013 as the first cloud mining provider, CEX.IO has become a multi-functional cryptocurrency exchange, trusted by over a million users.",
    website: "https://cex.io/",
  },
  {
    name: "Changelly",
    description:
      "Changelly is a popular cryptocurrency exchange providing the ability to instantly and seamlessly exchange over 100 altcoins at the best market rate.",
    website: "https://changelly.com/",
  },
  {
    name: "ChangeNOW",
    description:
      "ChangeNOW is a non-custodial exchange service. We strive for maximum safety, simplicity, and convenience. You can buy cryptocurrency with Visa or MasterCard.",
    website: "https://changenow.io/",
  },
  {
    name: "Coinbase Pro",
    description:
      "Coinbase Pro offers individuals the ability to trade a variety of digital assets on a secure, insurance-backed platform.",
    website: "https://pro.coinbase.com/",
  },
  {
    name: "Gemini",
    description:
      "Gemini is a licensed digital asset exchange and custodian. Started by the Winklevoss twins in 2015, Gemini became the world’s first licensed ether exchange in 2016.",
    website: "https://gemini.com/",
  },
  {
    name: "Kraken",
    description:
      "Founded in 2011, San Francisco-based Kraken is the largest Bitcoin exchange in euro volume and liquidity, also trading in Canadian dollars, US dollars, and more.",
    website: "https://kraken.com/",
  },
  {
    name: "Liquid",
    description:
      "Liquid is a unified, globally-sourced trading platform that bridges the worlds of fiat and crypto.",
    website: "https://www.liquid.com/",
  },
  {
    name: "Luno",
    description:
      "Luno makes it safe and easy to buy, store, and learn about digital currencies like Bitcoin and Ethereum in Malaysia.",
    website: "https://www.luno.com/",
  },
  {
    name: "ShapeShift",
    description:
      "ShapeShift is a web and API platform founded in 2014 to provide instant Bitcoin and altcoin conversion with maximum efficiency.",
    website: "https://shapeshift.com/",
  },
  {
    name: "Artis Turba",
    description:
      "Artis Turba is a South African Crypto-FIAT and Crypto-Crypto Exchange allowing users to buy Bitcoin, Ethereum, and Ripple with South African Rands.",
    website: "https://artis-turba.com/",
  },
  {
    name: "BitAsset",
    description:
      "BitAsset is a cryptocurrency exchange located in Hong Kong and was established in 2018.",
    website: "https://www.bitasset.com/",
  },
  {
    name: "BitcoinVN",
    description:
      "Buy and sell Ether and other digital assets securely on the most trusted cryptocurrency exchange in Vietnam.",
    website: "https://bitcoinvn.io/",
  },
  {
    name: "Bitexbook",
    description:
      "Bitexbook is the crypto-currency exchange that appreciates the time of its customers. Instant deposit and withdrawal in an hour, verification in 24 hours.",
    website: "https://bitexbook.com/",
  },
  {
    name: "BitexLive",
    description:
      "Based in Turkey, BitexLive provides a fast, dependable, and user-friendly trading platform.",
    website: "https://bitexlive.com/",
  },
  {
    name: "BitoPro",
    description:
      "BitoEX offers local digital currency services, with excellent branding and ease of access, focusing on the Taiwanese market.",
    website: "https://www.bitopro.com/",
  },
  {
    name: "Bitso",
    description:
      "Based in Mexico, Bitso is a platform for trading Bitcoin with Mexican Pesos, offering a high level of professionalism and security.",
    website: "https://bitso.com/",
  },
  {
    name: "Bitsen",
    description:
      "Bitsen is a cryptocurrency exchange based in Indonesia, established in 2017.",
    website: "https://bitsen.com/",
  },
  {
    name: "Bity",
    description:
      "Bity is a Swiss-based fintech startup simplifying the conversion from traditional money to cryptocurrencies and digital assets.",
    website: "https://bity.com/",
  },
  {
    name: "BTC-Alpha",
    description:
      "BTC-Alpha offers trading in numerous digital coins and supports USD fiat currency. Its trading platform is web-based with charts by TradingView.",
    website: "https://btc-alpha.com/",
  },
  {
    name: "BTCMarkets",
    description:
      "BTC Markets offers a secure and reliable trading platform for professional investors, businesses, and anyone interested in trading across Australia.",
    website: "https://btcmarkets.net/",
  },
  {
    name: "BTSE",
    description:
      "BTSE is a multi-currency digital assets exchange and derivatives platform bridging the gap between fiat markets and digital assets.",
    website: "https://btse.com/",
  },
  {
    name: "Bvnex",
    description:
      "Bvnex exchange is a cryptocurrency exchange located in Vietnam, established in 2018.",
    website: "https://bvnex.com/",
  },
  {
    name: "ChainEX",
    description:
      "ChainEX is a digital currency platform where South African traders can buy, sell, or trade almost 30 digital assets using ZAR as fiat currency.",
    website: "https://www.chainex.io/",
  },
  {
    name: "Citex",
    description:
      "CITEX is a peer-to-peer digital asset trading platform with the aim to open up a full process for trading, payment, and transaction of legal currencies.",
    website: "https://citex.io/",
  },
  {
    name: "Rhino.fi",
    description:
      "Rhinofi allows users to explore all the best DeFi opportunities from one self-custodial layer 2 wallet.",
    website: "https://www.rhino.fi/",
  },
  {
    name: "Uniswap (V2)",
    description:
      "Uniswap V2 has many new features and technical improvements compared with Uniswap V1 including ERC20 / ERC20 Pairs, Price Oracles, Flash Swaps, and much more!",
    website: "https://uniswap.org/",
  },
  {
    name: "1inch",
    description:
      "1inch.Exchange is a user-friendly DEX aggregator that connects to other DEXs for better pricing and executes trades in a single transaction.",
    website: "https://1inch.io/",
  },
  {
    name: "Airswap",
    description:
      "AirSwap is a marketplace powered by search. Buyers, sellers, people, and programs can connect and trade wallet to wallet using smart contracts.",
    website: "https://www.airswap.io/",
  },
  {
    name: "Allbit",
    description:
      "Allbit is a blockchain commercial service that provides a fully decentralized trading experience without the delegation of assets.",
    website: "https://www.allbit.io/",
  },
  {
    name: "Balancer",
    description:
      "Balancer is an automated portfolio manager, liquidity provider, and price sensor.",
    website: "https://balancer.fi/",
  },
  {
    name: "Bancor Network",
    description:
      "Bancor allows you to convert between any two tokens on the network, with no counterparty, at an automatically calculated price.",
    website: "https://www.bancor.network/",
  },
  {
    name: "Bebop",
    description:
      "Bebop is a decentralized trading platform that aims to deliver a breakthrough in user experience for trading in DeFi.",
    website: "https://www.bebop.xyz/",
  },
  {
    name: "Binance DEX",
    description:
      "The dual-chain architecture of Binance Chain and Binance Smart Chain empowers you to build your own decentralized apps and digital assets on one blockchain.",
    website: "https://www.binance.org/",
  },
  {
    name: "Bitcratic",
    description:
      "Bitcratic is here to empower the decentralized exchange. It is a decentralized exchange for ERC20 tokens with off-chain order book and on-chain settlement.",
    website: "https://www.bitcratic.com/",
  },
  {
    name: "Blockonix",
    description:
      "Blockonix is based on the Ethereum Protocol and allows trading of Ethereum tokens in a decentralized manner.",
    website: "https://www.blockonix.com/",
  },
  {
    name: "Capital DEX",
    description:
      "Capital DEX is a decentralized legally protected exchange primarily for security tokens.",
    website: "https://www.capitaldex.com/",
  },
  {
    name: "Clipper",
    description:
      "Clipper is the decentralized exchange (DEX) built to give the self-made crypto trader the best possible prices on small trades.",
    website: "https://www.clipper.exchange/",
  },
  {
    name: "CoinChangeX",
    description:
      "CoinChangeX is a decentralized Ethereum Token Exchange that allows users to securely trade ETH and Ethereum-based tokens.",
    website: "https://www.coinchangex.com/",
  },
  {
    name: "Compound Finance",
    description:
      "Compound is an algorithmic, autonomous interest rate protocol built for developers.",
    website: "https://www.compound.finance/",
  },
  {
    name: "Cybex DEX",
    description: "Cybex Decentralized Exchange.",
    website: "https://www.cybex.io/",
  },
  {
    name: "DDEX",
    description:
      "User-friendly decentralized exchange for Ethereum-based tokens.",
    website: "https://www.ddex.io/",
  },
  {
    name: "dex.blue",
    description:
      "dex.blue is a high-performance decentralized exchange that delivers the best non-custodial crypto trading.",
    website: "https://www.dex.blue/",
  },
  {
    name: "DEX.top",
    description:
      "DEX.top features instant trading on-chain with the lowest gas cost.",
    website: "https://www.dex.top/",
  },
  {
    name: "DINNGO Exchange",
    description:
      "DINNGO is a reliable decentralized exchange with the best user experience that you deserve.",
    website: "https://www.dinngo.com/",
  },
  {
    name: "Erc dEX",
    description: "Peer-to-peer trading on Ethereum.",
    website: "https://www.ercdex.com/",
  },
  {
    name: "EthEx",
    description: "Buy and sell ERC20 tokens in a single transaction.",
    website: "https://www.ethextoken.com/",
  },
  {
    name: "Everbloom",
    description:
      "Everbloom is a decentralized cryptocurrency exchange focused on the security and reliability of Ethereum-based ERC20 tokens.",
    website: "https://www.everbloom.co/",
  },
  {
    name: "Forkdelta",
    description:
      "ForkDelta is a decentralized Ethereum Token Exchange. We have the most tokens and the highest liquidity.",
    website: "https://www.forkdelta.app/",
  },
  {
    name: "HalalDEX",
    description:
      "HalalDEX is a cutting-edge technology giving Shari'ah concerned investors an opportunity to invest in Shari'ah Compliant ERC20 Tokens.",
    website: "https://www.halaldex.com/",
  },
  {
    name: "Binance",
    description:
      "Binance is one of the most popular cryptocurrency exchanges that provide access to hundreds of digital currency pairs while maintaining security, liquidity, and high-speed trading.",
    website: "https://www.binance.com/",
  },
  {
    name: "Bitfinex",
    description:
      "Bitfinex is a full-featured spot trading platform for major digital assets & cryptocurrencies, owned and operated by iFinex Inc. The exchange also offers leveraged margin trading.",
    website: "https://www.bitfinex.com/",
  },
  {
    name: "OKX",
    description:
      "Discover crypto, on top of one of the world’s most reliable crypto trading & web3 platforms.",
    website: "https://www.okx.com/",
  },
  {
    name: "365Cash",
    description:
      "The exchange service in the CIS specializes in buying and selling BTC, ETH, and other cryptocurrencies for fiat and electronic payment systems. Works since 2015.",
    website: "https://www.365cash.co/",
  },
  {
    name: "6x",
    description:
      "Founded in Singapore, 6X is a digital asset trading platform for professional users around the world, providing a variety of transactions between digital assets and over-the-counter transactions.",
    website: "https://www.6x.com/",
  },
  {
    name: "Kraken",
    description:
      "Kraken is a US-based cryptocurrency exchange, founded in 2011, offering a range of fiat-to-crypto trading and a focus on security.",
    website: "https://www.kraken.com/",
  },
  {
    name: "Coinbase",
    description:
      "Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more.",
    website: "https://www.coinbase.com/",
  },
  {
    name: "KuCoin",
    description:
      "KuCoin is a global cryptocurrency exchange for numerous digital assets and cryptocurrencies, providing an exchange service for users globally.",
    website: "https://www.kucoin.com/",
  },
  {
    name: "Gemini",
    description:
      "Gemini is a US-based regulated cryptocurrency exchange that offers access to a large selection of cryptocurrencies for buying, selling, and storing.",
    website: "https://www.gemini.com/",
  },
  {
    name: "Huobi",
    description:
      "Huobi is a cryptocurrency exchange providing spot trading, derivatives trading, staking, and lending services.",
    website: "https://www.huobi.com/",
  },
  {
    name: "FTX",
    description:
      "FTX is a cryptocurrency exchange built by traders for traders, offering innovative products including industry-first derivatives, options, volatility products, and more.",
    website: "https://www.ftx.com/",
  },
  {
    name: "Bitstamp",
    description:
      "Bitstamp is one of the world's longest-standing cryptocurrency exchanges, providing reliable trading services since 2011.",
    website: "https://www.bitstamp.net/",
  },
  {
    name: "Bithumb",
    description:
      "Bithumb is a South Korean cryptocurrency exchange providing a large range of cryptocurrencies for trade with a focus on the Korean market.",
    website: "https://www.bithumb.com/",
  },
  {
    name: "Gate.io",
    description:
      "Gate.io is one of the oldest and largest exchanges, offering over 1,400 cryptocurrencies for trading and an array of financial products.",
    website: "https://www.gate.io/",
  },
  {
    name: "Poloniex",
    description:
      "Poloniex is a cryptocurrency exchange offering advanced trading features for both spot and margin trading.",
    website: "https://www.poloniex.com/",
  },
  {
    name: "Bybit",
    description:
      "Bybit is a global cryptocurrency exchange that offers trading in derivatives and perpetual contracts as well as spot trading.",
    website: "https://www.bybit.com/",
  },
  {
    name: "Probit",
    description:
      "ProBit is a Korean cryptocurrency exchange providing services globally with hundreds of altcoins available.",
    website: "https://www.probit.com/",
  },
  {
    name: "ZB.com",
    description:
      "ZB.com is a cryptocurrency exchange providing a secure and reliable platform for traders worldwide, focusing on the Chinese market.",
    website: "https://www.zb.com/",
  },
  {
    name: "HitBTC",
    description:
      "HitBTC is a European cryptocurrency exchange offering a variety of trading pairs and features for both new and experienced traders.",
    website: "https://www.hitbtc.com/",
  },
  {
    name: "Upbit",
    description:
      "Upbit is a South Korean cryptocurrency exchange with global reach, offering a wide selection of cryptocurrencies for trading.",
    website: "https://www.upbit.com/",
  },
];

export default { crypto, dex, fiat, all };
