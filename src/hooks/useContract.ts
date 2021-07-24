import {useMemo} from 'react'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import contracts from "../config/contracts"
import useWeb3 from 'hooks/useWeb3'
import {web3NoAccount} from 'hooks/useWeb3'

import lotteryAbi from 'abis/lottery.json'

export const getAddress = (address: any): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID || 65
  if ((typeof address).toLocaleLowerCase() === 'string') return address;
  return address[chainId]
}

const getContract = (abi: any, address: any, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}


export const useLottery = () => {
  const web3 = useWeb3()
  return useMemo(() => getContract(lotteryAbi, getAddress(contracts.lottery), web3), [web3])
}
