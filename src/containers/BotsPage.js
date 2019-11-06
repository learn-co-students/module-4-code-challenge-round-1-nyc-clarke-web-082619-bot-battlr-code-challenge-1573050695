import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myArmy: [],
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          bots: data
        })
      })
  }

  joinArmy = (bot) => {
    if(this.state.myArmy.includes(bot)){
      null
    } else {
      this.setState({
        myArmy: [...this.state.myArmy, bot]
      })
    }
  }

  removeFromArmy = (botObj) => {
    if(this.state.myArmy.includes(botObj)){
      const armyCopy = this.state.myArmy.slice()
      const newArmyList = armyCopy.filter(bot => bot.id !== botObj.id)
        this.setState({
          myArmy: newArmyList
        })
    }
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} joinArmy={this.joinArmy} />
        <YourBotArmy bots={this.state.myArmy} removeFromArmy={this.removeFromArmy} />
      </div>
    );
  }

}

export default BotsPage;
