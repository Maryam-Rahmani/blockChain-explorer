import { TransactionListsProps } from "../../types";
import React from 'react';
import AddTransaction from "./addTransaction"

const TransactionsList: React.FunctionComponent<TransactionListsProps> = ({
  transactionList,
}) => {
  return <React.Fragment> 
    {transactionList.map((val) => {
      return (
        <AddTransaction
        from={val.from}
        to={val.to}
        amount={val.amount}
        fee={val.fee}
        txHash={val.txHash}
        key={val.txHash}
        />
      )
    })}
  </React.Fragment>

}

export default TransactionsList