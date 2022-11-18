import { ITransaction, IAccount } from "../../types";
import { useData, useInterval, useMaker } from "../../hooks"
import {  useState, useEffect} from 'react';
import TransactionsList from "./transactionsList"
import { ADDRESSES } from "../../data";
import "./transactionStyle.css"

const TransactionShow = () =>{
  const data = useData()
  const maker = useMaker()

  useEffect (() => {
    const valid_accounts = ADDRESSES.filter((val) => {
      return !val.isSuspend
    })
    let new_transaction = maker.onMakeTransactionHandler(valid_accounts)
    let trans = data.addNewTransaction(new_transaction)
    useInterval(trans,2000)
  }, [])

  

const succ_trans = data.newTransaction.filter(val => {
  return val.isSuccess
})

const fail_trans = data.newTransaction.filter(val => {
  return !val.isSuccess
})
  
  return(
    <div className="two-trans">
      <div className="one-trans">
        <div className="transTitle">
          <h3 style={{marginLeft: "10px", paddingBottom:"10px"}}>Latest Success Transaction</h3>
        </div>
        <div className="container transaction-list">
          <div className="scroll container-body-trans">
            <TransactionsList
              transactionList={succ_trans}
            />
          </div>
        </div>
      </div>
      <div className="one-trans">
        <div className="transTitle">
          <h3 style={{marginLeft: "10px"}}>Latest Failed Transaction</h3>  
        </div>
        <div className="container transaction-list">
          <div className="scroll container-body-trans">
            <TransactionsList
              transactionList={fail_trans}
            />
          </div>
      </div>
      </div>
    </div>
  )
}

export default TransactionShow