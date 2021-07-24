import {useEffect, useState, useRef} from 'react'
import Web3 from 'web3'
import {useWeb3React} from '@web3-react/core'
import {HttpProviderOptions} from 'web3-core-helpers'

const RPC_URL = 'https://exchaintestrpc.okex.org'

const httpProvider = new Web3.providers.HttpProvider(RPC_URL, {timeout: 15 * 1000} as HttpProviderOptions)
export const web3NoAccount = new Web3(httpProvider)

const useWeb3 = () => {
  const {library} = useWeb3React()
  const refEth = useRef(library)
  const [web3, setweb3] = useState(library ? new Web3(library) : web3NoAccount)

  useEffect(() => {
    if (library !== refEth.current) {
      setweb3(library ? new Web3(library) : web3NoAccount)
      refEth.current = library
    }
  }, [library])

  return web3
}

export default useWeb3
