import { useData } from "../hooks"
import { useInterval}  from "../hooks"
import { useMaker } from "../hooks"
import { ITransaction } from "../types";
import {  useState, useEffect } from 'react';
import setAccountsList from "./setAddress"
import { ADDRCONFIG } from "dns";
import { ADDRESSES } from "../data";

const setTransactionsList = () =>{
  const [createTransaction, setCreateTransaction] = useState<ITransaction>({
      fee: 0,
      amount: 0,
      txHash: "",
      to: "",
      from: "",
      isSuccess: false,
    })
  const [transaction, setTransaction] = useState<ITransaction>({
    fee: 0,
    amount: 0,
    txHash: "",
    to: "",
    from: "",
    isSuccess: false,
  })
 
  const data = useData()
  const maker = useMaker()


  const setNewTransaction = () => {
    const valid_accounts = ADDRESSES.filter(val => {
      return !val.isSuspend
    })
    let new_transaction = maker.onMakeTransactionHandler(valid_accounts)
    
    setCreateTransaction(new_transaction)
  }

  useEffect (() => {
   useInterval(setNewTransaction,2000)
  }, [])

  useEffect(() => {
    data.addNewTransaction(createTransaction)
  }, [createTransaction])

  return { transaction }
}
export default setTransactionsList

