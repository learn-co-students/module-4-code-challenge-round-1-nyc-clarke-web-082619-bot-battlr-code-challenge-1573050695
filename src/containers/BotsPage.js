import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    myBotArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => {
        this.setState({
          bots: bots
        })
      })
  }

  enlistBot = (id) => { // adds enlisted Bot to myBotArmy 
    // console.log(id)
    let newBot = this.state.bots.find( bot => bot.id === id);
    // console.log(newBot)
    this.setState({
      myBotArmy: [...this.state.myBotArmy, newBot]
    })
    this.removeBot(id)
  }

  removeBot = (id) => {
    let updatedBots = this.state.bots.filter( bot => bot.id !== id);
    // console.log(updatedBots)

    this.setState({
      bots: updatedBots
    })
  }

  render() {
    console.log(this.state.bots)
    return (
      <div>
        <YourBotArmy myBotArmy={this.state.myBotArmy} /> 
        <BotCollection enlistBot={this.enlistBot} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
