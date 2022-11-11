import { useData, useInterval, useMaker } from "../../hooks"
import {  useEffect } from 'react';
import setAccountsList from "../../functions/setAddress"
import AccountsList from "./accountsList"
import "./accountsStyle.css"

const AccountsShow = () => {
  let account_maker = useMaker()
  let data = useData()
  const account = setAccountsList()

  useEffect(() => {
    let newAddress= account_maker.onMakeAddressHandler() 
    let account= data.addNewAccount(newAddress)
    useInterval(account, 17000)
  }, [])

  return(
    <div className="accountBody">
      <div className="accountTitle">
        <h3 style={{marginLeft: "10px"}}>Accounts List</h3>
      </div>
      <div className="container accounts-list">
        <div className="scroll container-body">
          <AccountsList
            accountList={data.newAccount}
          />
        </div>
    </div>
    </div>
   
  )

}

export default AccountsShow