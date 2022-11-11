import { IAccount } from "../../types";
import React from 'react';
import { createShortSting } from "../../functions/index"
import "./accountsStyle.css"

const AddAccount: React.FC<IAccount> = ({
  address,
  balance,
  isSuspend,
}) => {
  
  return(
    <div className="account" id={address}>
      <div className="card" id="accountDiv">
        <div 
        id="adrDiv" 
        style={{textDecoration : isSuspend? "line-through" : "none", textDecorationColor:"grey", color: isSuspend ? "grey" : "black"}}
        >
          {createShortSting(address, 0, 7)}
        </div>
        <div className="blcDiv">
            {balance.toFixed(4)}
        </div>
      </div>
      <hr/>
    </div>
   
  )
}

export default AddAccount