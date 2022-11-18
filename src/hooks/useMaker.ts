import { addressGenerator, amountGenerator } from "../utils/index";
import { idGenerator, randomArrSelect, txHashGenerator } from "../utils/index";
import { TRANSACTION_FEE} from "../constants/index";
import { IAccount, ITransaction, IBlock } from "../types/index";
import { useRef, useEffect } from "react";
import useInterval from "./useInterval";

export interface UseMakerProps {
  accounts: IAccount[];
  makeAccount: (address: string) => void;
  makeTransaction: (transaction: ITransaction) => void;
  makeBlock: (block: IBlock) => void;
}

const useMaker = ({
  accounts,
  makeAccount,
  makeTransaction,
  makeBlock,
}: UseMakerProps) => {
  const transactions_id = useRef<Array<string>>([])
  const dataAccounts = useRef<Array<IAccount>>([])

  const onMakeAddressHandler = () => {
    const newAccountAddress = addressGenerator();
    makeAccount(newAccountAddress) 
  };

  const onMakeTransactionHandler = () => {
    const newTransaction: ITransaction = {
      fee: TRANSACTION_FEE,
      amount: amountGenerator(),
      txHash: txHashGenerator(),
      to: randomArrSelect(dataAccounts.current)?.address,
      from: randomArrSelect(dataAccounts.current)?.address,
    };
    transactions_id.current.push(newTransaction.txHash)
    makeTransaction(newTransaction)
  };

  const onMakeBlockHandler = () => {
    const newBlock: IBlock = {
      id: idGenerator(),
      winner: randomArrSelect(dataAccounts.current)?.address,
      transactions: transactions_id.current,
    };
    makeBlock(newBlock)
  };

  useEffect(() => {
    dataAccounts.current = accounts
  }, [accounts])

 
  useInterval(onMakeAddressHandler, 17000)
  useInterval(onMakeTransactionHandler, 2000)
  useInterval(onMakeBlockHandler, 30000)
};

export default useMaker;
