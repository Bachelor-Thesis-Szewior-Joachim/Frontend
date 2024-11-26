import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./mainpage/mainpage";
import Accounts from "./blockchain/accounts/search/accounts";
import Blocks from "./blockchain/blocks/search/blocks";
import Transactions from "./blockchain/transactions/search/transactions";
import Login from "./login/login";
import SignUp from "./signup/signup";
import News from "./resources/news/news";
import Collection from "./tokens/collections/search/collection";
import AccountDetails from "./blockchain/accounts/details/accountDetails";
import TransactionDetails from "./blockchain/transactions/details/transactionDetails";
import BlockDetails from "./blockchain/blocks/details/blockDetails";
import CollectionDetails from "./tokens/collections/details/collectionDetails";
import NftStatistics from "./tokens/nftStatistics/search/nftStatistics";
import NftStatisticsDetails from "./tokens/nftStatistics/details/nftStatisticsDetails";
import Ranking from "./cryptocurrency/ranking/search/ranking";
import CryptocurrencyDetails from "./cryptocurrency/ranking/details/cryptocurrencyDetails";
import Categories from "./cryptocurrency/categories/search/categories";
import GlobalMarket from "./cryptocurrency/globalMarket/globalMarket";
import GainersAndLosers from "./cryptocurrency/gainersAndLosers/gainersAndLosers";
import HistoricalData from "./cryptocurrency/historicalData/search/historicalData";
import SpecificDate from "./cryptocurrency/historicalData/details/specificDate";
import Converter from "./resources/converter/converter";
import Directory from "./resources/directory/directory";
import ExchangesList from "./resources/directory/exchanges/exchanges";
import Wallet from "./resources/directory/wallet/wallet";
import NewsAndForums from "./resources/directory/newsAndForums/newsAndForums";
import BlockchainEvents from "./resources/directory/events/events";
import Learning from "./resources/directory/learning/learning";
import SmartContracts from "./resources/directory/smartContracts/smartContracts";
import Mining from "./resources/directory/mining/mining";
import Others from "./resources/directory/others/others";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/blockchain/accounts" element={<Accounts />} />
        <Route
          path="/blockchain/accounts/:address"
          element={<AccountDetails />}
        />
        <Route path="/blockchain/blocks" element={<Blocks />} />
        <Route path="/blockchain/blocks/:address" element={<BlockDetails />} />
        <Route path="/blockchain/transactions" element={<Transactions />} />
        <Route path="/blockchain/transactions/:transactionHash" element={<TransactionDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resources/news" element={<News />} />
        <Route path="/resources/converter" element={<Converter />} />
        <Route path="/resources/directory" element={<Directory />} />
        <Route path="/tokens/collection" element={<Collection />} />
        <Route path="/token/collection/details/:name" element={<CollectionDetails />} />
        <Route
          path="/resources/general-nft-statistics"
          element={<NftStatistics />}
        />
        <Route
          path="/tokens/nftStatistics/:name"
          element={<NftStatisticsDetails />}
        />
        <Route path="/resources/ranking" element={<Ranking />} />
        <Route
          path="/resources/ranking/:name"
          element={<CryptocurrencyDetails />}
        />
        <Route path="/resources/categories" element={<Categories />} />
        <Route
          path="/cryptocurrency/gainersAndLosers"
          element={<GainersAndLosers />}
        />
        <Route
          path="/cryptocurrency/historicalData"
          element={<HistoricalData />}
        />
        <Route path="/cryptocurrency/globalMarket" element={<GlobalMarket />} />
        <Route
          path="/historicalData/:year/:month/:day"
          element={<SpecificDate />}
        />
        <Route
          path="/resources/directory/exchange/:exchange"
          element={<ExchangesList />}
        />
        <Route
          path="/resources/directory/wallet/:wallet"
          element={<Wallet />}
        />
        <Route
          path="/resources/directory/newsAndForums/:type"
          element={<NewsAndForums />}
        ></Route>
        <Route
          path="/resources/directory/events/:type"
          element={<BlockchainEvents />}
        ></Route>
        <Route
          path="/resources/directory/learningResources/:type"
          element={<Learning />}
        ></Route>
        <Route
          path="/resources/directory/smartContracts/:type"
          element={<SmartContracts />}
        ></Route>
        <Route
          path="/resources/directory/mining/:type"
          element={<Mining />}
        ></Route>
        <Route
          path="/resources/directory/others/:type"
          element={<Others />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
