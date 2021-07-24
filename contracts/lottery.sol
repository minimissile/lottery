pragma solidity ^0.4.17;

contract Lottery {
  // 创建只能合约的人的地址
  address public manager;
  // 记录所有参与彩票投注的人
  address[] public playsers;

  function Lottery() public {
    manager = msg.sender;
  }

  function getManager() public view returns (address){
    return manager;
  }

  // 投注彩票
  function enter() public payable {
    require(msg.value == 1 ether);
    playsers.push(msg.sender);
  }

  // 返回所有的投注彩票的人
  function getAllPlayers() public view returns(address[]) {
    return playsers;
  }

  // 获取余额
  function getBalance() public view returns(uint){
    return this.balance;
  }

  // 获取彩票参与者数量
  function getPlayersCount() public view returns(uint) {
    return playsers.length;
  }

  // 生成随机数
  function random() public view returns(uint){
    return uint(keccak256(block.difficulty,now,playsers));
  }

  // 开奖
  function pickWinner() public onlyManagerCanCall returns(address){
    uint index = random() % playsers.length;
    address winner = playsers[index];
    playsers = new address[](0);
    winner.transfer(this.balance);
    return winner;
  }

  // 退款
  function refund() public onlyManagerCanCall {
    for(uint i = 0; i < playsers.length;i++){
      playsers[i].transfer(1 ether);
    }
  }

  modifier onlyManagerCanCall(){
    require(msg.sender == manager);
    _;
  }

}
