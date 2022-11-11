import { ReactNode } from 'react';

export interface IAccount {
  address: string;
  balance: number;
  isSuspend: boolean;
}

export interface AccountListsProps {
  accountList: IAccount[]
}


export interface ITransaction {
  from: string;
  to: string;
  amount: number;
  fee: number;
  isSuccess?: boolean;
  txHash: string;
}

export interface TransactionListsProps{
  transactionList: ITransaction[]
}

export interface IBlock {
  id: string;
  transactions: string[];
  winner: string;
}

export interface AddIBlockProps {
  id: string;
  transactions: string[];
  winner: string;
}

export interface BlockListsProps {
  blockList: IBlock[]
}


export interface CommonProps {
  children?: ReactNode;
}




