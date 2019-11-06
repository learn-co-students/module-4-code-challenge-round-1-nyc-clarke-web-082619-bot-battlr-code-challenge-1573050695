import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "./YourBotArmy";

//Can't figure out why my CSS is not working correctly.
//YourBotArmy Component renders at the bottom of the page instead of the top.
//BotSpecs Component isn't centered or hidden


class BotsPage extends React.Component {
  
  state = {
    allBots: [],
    yourArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then (resp => resp.json())
    .then (data => {
      this.setState({
        allBots: data
      })
    })
  }

  enlistBot = (id) => {
    this.state.allBots.map(bot=> bot.id === id ?
      this.setState({
        allBots: this.state.allBots.filter(bot => bot.id !== id),
        yourArmy: [...this.state.yourArmy, bot]
      })
    :
    this.state.allBots
    )
  }

  dischargeBot = (id) => {
    this.state.yourArmy.map(bot=> bot.id === id ?
      this.setState({
        allBots: [...this.state.allBots, bot],
        yourArmy: this.state.yourArmy.filter(bot => bot.id !== id)
      })
    :
    this.state.allBots
    )
  }

  render() {
    return (
      <div>
        <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot}/>
        <YourBotArmy yourArmy={this.state.yourArmy} dischargeBot={this.dischargeBot}/>
      </div>
    );
  }

}

export default BotsPage;
