import {AccountListsProps, IAccount} from "../../types";
import React from 'react';
import AddAccount from "./addAccount";


const AccountsList: React.FunctionComponent<AccountListsProps> = ({
  accountList,
}) => {
  return <React.Fragment> 
    {accountList.map((value: IAccount) => {
      return (
        <AddAccount
          address={value.address}
          balance={value.balance}
          isSuspend={value.isSuspend}
          key={value.address}
        />
      )
    })}
  </React.Fragment>

}

export default AccountsList