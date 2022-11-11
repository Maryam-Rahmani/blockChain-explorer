import { ADDRESSES } from "../data";
import { IAccount, IBlock, ITransaction } from "../types";
import { transaction_list, block_list } from "../functions/index";
import {  useState, useEffect, useMemo } from 'react';
import { BLOCK_WINNER_REWARD } from '../constants/index'


const useData = () => {
  // Define Your States

  const [newAccount, setNewAccount] = useState<Array<IAccount>>([])
  const [newTransaction, setNewTransaction] = useState<Array<ITransaction>>([])
  const [newBlock, setNewBlock] = useState<Array<IBlock>>([])

  //const blocks_List = useMemo(() =>{
   // return newBlock
  //}, [newBlock])

  //const succ_list = useMemo(() =>{
    //return newTransaction.filter((val) => {
    //  return val.isSuccess
   // })
   // }, [newTransaction])


  const addNewAccount = (address: string) => {
    let newAddress = {
      address: address, 
      balance: 0,
      isSuspend: false,
    }
    if (newAddress.address.length > 2) {
      ADDRESSES.unshift(newAddress)
    }
      
    console.log("New Address", address);
  };
 
    
  const addNewTransaction = (transaction: ITransaction) => {
    const feeValue = transaction.amount + transaction.fee

    ADDRESSES.forEach( element => {
      if (element.address === transaction.from && feeValue > element.balance) {
          transaction_list.unshift({...transaction, isSuccess:false})
          element.isSuspend = true
      }else if (element.address === transaction.from && feeValue < element.balance ){
          transaction_list.unshift({...transaction, isSuccess:true})
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
    //setNewBlock([...newBlock, block])
    if (block.id.length > 2) {
      block_list.unshift(block)
    }
    
    console.log("New Block", block);
    }
    

  useEffect(() => {
    setNewAccount(ADDRESSES)
    
  },[])

 
  
 useEffect(() => { 
  setNewTransaction(transaction_list)
 },[])


 useEffect(() => { 
  setNewBlock(block_list)
 },[])

    //console.log(blocks_List)
  
  return {
    // Return Your States
    newAccount,
    newTransaction,
    newBlock,
    addNewAccount,
    addNewTransaction,
    addNewBlock,
    //blocks_List
  };
};

export default useData;
