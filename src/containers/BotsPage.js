import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = { 
    bots: {},
    armyBot: new Set()
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(data =>{
      let hashMap = {}
      data.map(bot => hashMap[bot.id]= bot)
      this.setState({
        bots: hashMap
      })
    })
  }

  handleArmyClick = (id,from) => {
    if(from === "add"){
      let curSet = this.state.armyBot.add(id)
      this.setState({
        armyBot: curSet
      })
    }else{
      this.state.armyBot.delete(id)
      this.setState({
        armyBot: this.state.armyBot
      })
    }
  } 


  render() {
    // console.log(this.state.armyBot)
    return (
      <div>
        <YourBotArmy {...this.state} handleArmyClick={this.handleArmyClick}/>
        <BotCollection {...this.state} handleArmyClick={this.handleArmyClick}/>
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
