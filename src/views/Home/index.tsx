import React from 'react'
import {Message, Container, Card, Image, Icon, Statistic, Button} from 'semantic-ui-react'
import styled from 'styled-components'

const Home: React.FC = () => {

  // 连接钱包
  const handleConnect = () => {

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
            <span>管理员地址：0x000000000000000000000000000000</span>
          </Card.Meta>
          <Card.Description>
            每周日晚上八点准时开奖
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Icon name='user'/>
            22 人参与
          </div>
        </Card.Content>

        <Card.Content extra>
          <Statistic color="red">
            <Statistic.Value>27 ether</Statistic.Value>
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

export default Home
