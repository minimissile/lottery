import React, {useEffect, useState} from 'react'
import {Message, Container, Card, Image, Statistic, Icon, Button} from 'semantic-ui-react'
import styled from 'styled-components'
import useLottery from 'hooks/useLottery'

const Home: React.FC = () => {
  const lottery = useLottery()
  // 所有参与彩票的人
  const [allPlayers, setAllPlayers] = useState<number>(0)
  // 总奖池
  const [balance, setBalance] = useState<string>('0')
  const [manager, setManager] = useState<string>()

  useEffect(() => {
    const getData = async ()=>{
      const balanceRes = await lottery.getBalance()
      setBalance(balanceRes.toString())

      const allPlayersRes = await lottery.getAllPlayers()
      setAllPlayers(allPlayersRes?.length)

      const managerRes = await lottery.getManager()
      setManager(managerRes)
    }
    getData()
  }, [])


  // 连接钱包
  const handleConnect = async () => {

  }

  return (
    <HomeContainer>
      <Message info>
        <Flex>
          <div>
            <Message.Header>曙光彩票</Message.Header>
            <p>客官, 来玩玩呀</p>
          </div>
          <Button color='teal' onClick={handleConnect}>连接钱包</Button>
        </Flex>
      </Message>

      <Card>
        <Image src='/images/banner.png' wrapped ui={false}/>
        <Card.Content>
          <Card.Header>周周彩</Card.Header>
          <Card.Meta>
            管理员地址：
            <Address style={{fontSize: '12px'}}>{manager}</Address>
          </Card.Meta>
          <Card.Description>
            每周日晚上八点准时开奖
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Icon name='user'/>
            {allPlayers} 人参与
          </div>
        </Card.Content>

        <Card.Content extra>
          <Statistic color="red">
            <Statistic.Value>{balance} ether</Statistic.Value>
          </Statistic>
        </Card.Content>

        <Button animated="fade">
          <Button.Content visible>投注产生希望</Button.Content>
          <Button.Content hidden>购买放飞梦想</Button.Content>
        </Button>

        <Button color="yellow">开奖</Button>
        <Button color="red">退钱</Button>
      </Card>
    </HomeContainer>
  )
}

const HomeContainer = styled(Container)`
  padding: 20px 0;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Address = styled.div`
  word-break: break-all;
`

export default Home
