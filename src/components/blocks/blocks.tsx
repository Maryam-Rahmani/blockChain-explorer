import { useData, useMaker, useInterval } from "../../hooks"
import setBlocksList from "../../functions/setBlock";
import { useEffect } from 'react';
import { ADDRESSES } from "../../data";
import BlocksList from "../blocks/blocksList";
import "./blockStyle.css"

const BlocksShow = () =>{

const block = setBlocksList()
 let maker = useMaker()
 let data = useData()


useEffect (() => {
  let new_block = maker.onMakeBlockHandler(ADDRESSES)
  let block = data.addNewBlock(new_block)
  useInterval(block,30000)
}, [])


  return(
    <div>
      <div className="blockBody">
        <div className="blockTitle">
          <h3 style={{marginLeft: "10px"}}>Latest Blocks</h3>
        </div>
        <div className="container block-list">
          <div className="scroll container-body-block">
            <BlocksList blockList={data.newBlock}/>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default BlocksShow