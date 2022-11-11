import React from "react"
import { AddIBlockProps} from "../../types";
import { createShortSting } from "../../functions/index"
import {transaction_list} from "../../functions/index"

const AddBlock: React.FC<AddIBlockProps> = ({
  id,
  transactions,
  winner,

}) => {
 
  const handleChange = (e:any) => {
    if (e.currentTarget.checked) {
      transactions.forEach (val => {
        transaction_list.forEach(item => {
          if (val === item.txHash ) {
            let trans = document.getElementById("val")
            if (trans !== null){trans.style.backgroundColor= "rgb(90, 158, 247)" 
          }
          }
        })
      })
    }
  }
  return(
    <div className="block" id={id}>
      <div className="card" id="blockInfo">
        <div id="blockDiv">
          <div id="block-check">
            <input type="checkbox" name="check" onChange={handleChange}/>
            <div id="txHash"><span>Block No.</span>{id.slice(0, 8)}</div>
          </div>
          <div className="lengthDiv">
            {transactions.length}
          </div>
        </div>
        <span>Winner:</span>
        <br/>
        <div className="winerDiv">
          {createShortSting(winner, 0, 7)}
        </div>
      </div>
    </div>
  )
}

export default AddBlock
