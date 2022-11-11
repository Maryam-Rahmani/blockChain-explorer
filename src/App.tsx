import React from "react";
import AccountsShow  from "./components/accounts/accounts"
import BlocksShow from "./components/blocks/blocks";
import TransactionShow from "./components/transactions/transactions"
import "./styles/AppStyle.css"

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {


  return (
    <div className="container">
      <h1 className="text-center mb-4">Blockchain Scan</h1>
      <div id="b-show">
        <BlocksShow/>
     </div>
     <div id="a-show">
      <AccountsShow/>
     </div>
     <div id="t-show">
      <TransactionShow/>
     </div>
    </div>
  );
};

export default App;

