import { ADDRESSES } from "../data";
import { IAccount, IBlock, ITransaction } from "../types";
import {  useState, useEffect, useMemo } from 'react';
import { BLOCK_WINNER_REWARD } from '../constants/index';


const useData = () => {
  const [newAccount, setNewAccount] = useState<Array<IAccount>>([])
  const [newTransaction, setNewTransaction] = useState<Array<ITransaction>>([])
  const [newBlock, setNewBlock] = useState<Array<IBlock>>([])

  const blocks_list = useMemo(() =>{
   return newBlock
  }, [newBlock])

const transaction_list = useMemo(() =>{
    return newTransaction.filter((val) => {
      return val.isSuccess
    })
    }, [newTransaction])


  const addNewAccount = (address: string) => {
    let newAddress = {
      address: address, 
      balance: 0,
      isSuspend: false,
    }
    ADDRESSES.unshift(newAddress)
    console.log("New Address", address);
  };
 
    
  const addNewTransaction = (transaction: ITransaction) => {
    const feeValue = transaction.amount + transaction.fee

    ADDRESSES.forEach( element => {
      if (element.address === transaction.from && feeValue > element.balance) {
          setNewTransaction(perv => [...perv,{...transaction, isSuccess:false}])
          element.isSuspend = true
      }else if (element.address === transaction.from && feeValue < element.balance ){
        setNewTransaction(perv => [...perv,{...transaction, isSuccess:true}])
          element.balance -= transaction.fee
          ADDRESSES.forEach( val => {
            if (val.address === transaction.to){
              val.balance += transaction.fee
            }
          })
        }
    });
    //console.log("New Transaction", transaction);
  };
    

  const addNewBlock = (block: IBlock) => {
    ADDRESSES.forEach(val => { 
      if (val.address === block.winner) {
          val.balance +=  BLOCK_WINNER_REWARD
        }
      })
    setNewBlock([...newBlock, block])
    console.log("New Block", block);
    }
    

  useEffect(() => {
    setNewAccount(ADDRESSES)
  },[])

  return {
    newAccount,
    newTransaction,
    newBlock,
    addNewAccount,
    addNewTransaction,
    addNewBlock,
    blocks_list,
    transaction_list
  };
};

export default useData;
