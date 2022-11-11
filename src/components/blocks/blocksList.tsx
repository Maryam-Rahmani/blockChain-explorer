import { BlockListsProps, IBlock } from "../../types";
import React from 'react';
import AddBlock from "./addBlock"

const BlocksList: React.FunctionComponent<BlockListsProps> = ({
  blockList,
}) => {
  return <React.Fragment> 
    {blockList.map((val:IBlock) => {
      return (
        <AddBlock
          id={val.id}
          transactions={val.transactions}
          winner={val.winner}
          key={val.id}
        />
      )
    })}
  </React.Fragment>
}

export default BlocksList