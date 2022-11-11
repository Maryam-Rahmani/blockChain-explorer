import { useData } from "../hooks"
import { useInterval}  from "../hooks"
import { useMaker } from "../hooks"
import { IAccount, IBlock, ITransaction } from "../types";
import {  useState, useEffect, useRef } from 'react';
import { ADDRESSES } from "../data";
import setTransactionsList from "./setTransaction"

const setBlocksList = () =>{
  const [createBlock, setCreateBlock] = useState<IBlock>({
    id: "",
    winner: "",
    transactions: [],
  })
  const [blocks, setBlocks] = useState<IBlock>({
    id: "",
    winner: "",
    transactions: [],
  })

  const data = useData()
  const maker = useMaker()
  const trans = setTransactionsList()


  const setBlock = () => {
    let new_block = maker.onMakeBlockHandler(ADDRESSES)
    setCreateBlock(new_block)
  }

  useEffect (() => {
    useInterval(setBlock,30000)
  }, [])

 
  useEffect(() => {
    data.addNewBlock(createBlock)
    //setBlocks(data.newBlock)
  }, [createBlock])

  return { blocks }
}
export default setBlocksList

