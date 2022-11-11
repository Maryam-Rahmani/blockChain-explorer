import { addressGenerator, amountGenerator } from "../utils/index"
import { idGenerator, randomArrSelect, fitString, txHashGenerator } from "../utils/index"
import { NEW_ADDRESS_INTERVAL, NEW_TRANSACTION_INTERVAL} from "../constants/index"
import { NEW_BLOCK_INTERVAL, TRANSACTION_FEE, BLOCK_WINNER_REWARD } from "../constants/index"
import { IAccount, ITransaction, IBlock } from "../types/index"
import { useRef, useState, useEffect } from "react"

export interface UseMakerProps {
    ACCOUNTS: Array<IAccount >
}

const useMaker = () => {
  const transactions_id = useRef<Array<string>>([])
  const [list , setList] = useState<Array<string>>([])
  
  const onMakeAddressHandler = () => {
    const newAccountAddress = addressGenerator();
    return newAccountAddress 
  };

  const onMakeTransactionHandler = (ACCOUNTS: IAccount[]) => {
    // ! You Should Change ACCOUNTS
    const newTransaction: ITransaction = {
      fee: TRANSACTION_FEE,
      amount: amountGenerator(),
      txHash: txHashGenerator(),
      to: randomArrSelect(ACCOUNTS)?.address,
      from: randomArrSelect(ACCOUNTS)?.address,
    };
    transactions_id.current.push(newTransaction.txHash)
    return newTransaction
  };

  const onMakeBlockHandler = (ACCOUNTS: IAccount[]) => {
    
    // ! You Should Change ACCOUNTS and CURRENT_TRANSACTIONS
    const newBlock: IBlock = {
      id: idGenerator(),
      winner: randomArrSelect(ACCOUNTS)?.address,
      transactions: list //transactions_id.current,
    };
    //transactions_id.current = []
    return newBlock
  };
  
useEffect(() => {
  setList(transactions_id.current)
}, [transactions_id.current])

  return {
    onMakeAddressHandler,
    onMakeTransactionHandler,
    onMakeBlockHandler,
  }
};

export default useMaker;
