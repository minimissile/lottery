import {useEffect} from 'react'
import useAuth from 'hooks/useAuth'

// 当本地缓存有钱包账号时, 进行快速登录
const useEagerConnect = () => {
  const {login} = useAuth()

  useEffect(() => {
    // const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames
    // if (connectorId) {
    //   login(connectorId)
    // }
  }, [login])
}

export default useEagerConnect

