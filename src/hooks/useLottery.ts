import {useMemo} from 'react'
import {ethers} from 'ethers'
import abi from 'abis/lottery.json'

const Lottery = () => {
  const contractAddress = '0x6b216E3689c85040b63806b7Ffc56AF5f8F98AA2'
  const provider = ethers.getDefaultProvider('ropsten')
  return useMemo(()=>  new ethers.Contract(contractAddress, abi, provider),[provider])
}

export default Lottery
