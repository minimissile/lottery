import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
// import { ConnectorNames } from 'types/wallet'
// import { useToast } from 'state/hooks'
// import { connectorsByName } from 'utils/web3React'
import {InjectedConnector} from '@web3-react/injected-connector'

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect"
}

const POLLING_INTERVAL = 15000

const chainId = 65

export const injected = new InjectedConnector({supportedChainIds: [chainId]})


// const walletconnect = new WalletConnectConnector({
//   rpc: {[chainId as number]: 'https://exchaintestrpc.okex.org'},
//   bridge: 'https://bridge.walletconnect.org',
//   qrcode: true,
//   pollingInterval: POLLING_INTERVAL,
// })


// export const connectorsByName = {
//   [ConnectorNames.Injected]: injected,
//   [ConnectorNames.WalletConnect]: walletconnect
// }

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  // const { toastError } = useToast()

  const login = useCallback((connectorID: ConnectorNames) => {
    console.log(connectorID);
    // const connector = connectorsByName[connectorID]
    // if (connector) {
    //   // activate(connector, (error: Error) => toastError(error.name, error.message))
    //   activate(connector, (error: Error) => console.log(error))
    // } else {
    //   console.log('The connector config is wriong')
    //   // toastError("Can't find connector", 'The connector config is wriong')
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { login, logout: deactivate }
}

export default useAuth
