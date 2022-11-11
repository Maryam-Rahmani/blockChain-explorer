import { ITransaction } from "../../types";
import { createShortSting } from "../../functions/index"
import "./transactionStyle.css"
import React from 'react';
const AddTransaction: React.FC<ITransaction> = ({
  from,
  to,
  amount,
  fee,
  txHash,
}) => {
  
  return(
    <div className="transaction" id={txHash}>
      <div className="card" id="transDiv">
          <div className="transInfo">
            <div id="txHash"><span>TxHash:</span>{createShortSting(txHash, 0, 5)}</div>
            <div id="from"><span>From:</span>{createShortSting(from, 0, 5)}</div>
            <div id="to"><span>To:</span>{createShortSting(to, 0, 5)}</div>
        </div>
        <div className="blcDivTrans">{(fee + amount).toFixed(4)}</div>
      </div>
    </div>
  )

}

export default AddTransaction
