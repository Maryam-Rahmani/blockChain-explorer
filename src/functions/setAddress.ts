import { useData } from "../hooks"
import { useInterval }  from "../hooks"
import { useMaker } from "../hooks"
import { IAccount } from "../types";
import {  useState, useEffect } from 'react';
import { ADDRESSES } from "../data";

const setAccountsList = () =>{

  const [newAddress, setNewAddress] = useState("")

  const [account, setAccount] = useState<IAccount>({
    address: "",
    balance: 0,
    isSuspend: false,
  })

  const [accountList, setAccountList] = useState<Array<IAccount>>(ADDRESSES)
  const data = useData()

  const maker = useMaker()

  const setAddress = () => {
    let random_address = maker.onMakeAddressHandler()
    setNewAddress(random_address)
  }

  useEffect (() => {
    useInterval(setAddress,17000)
  }, [])
 
  useEffect(() => {
    data.addNewAccount(newAddress)
   // setAccount({...account, address: data.newAccount.address})
   // setAccountList([...accountList, data.newAccount])
  }, [newAddress])
  

  return { newAddress, account, accountList }
}

export default setAccountsList

