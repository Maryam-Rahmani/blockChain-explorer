import { IAccount, IBlock, ITransaction } from "../types";
// function for slicing stings
export const createShortSting = (str: string, num1: number, num2: number) => {
  const firstSlice = str.slice(num1, num2+1)
  const secondSlice = str.slice(str.length-num2, str.length)
  const shorted_string = firstSlice + "..." + secondSlice

  return shorted_string
}

export const transaction_list: Array<ITransaction> = []
export const block_list: Array<IBlock> = []


