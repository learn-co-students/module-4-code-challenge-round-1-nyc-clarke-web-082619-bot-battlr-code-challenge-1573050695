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
    let newBot = this.state.bots.find( bot => bot.id === id);
    this.setState({
      myBotArmy: [...this.state.myBotArmy, newBot]
    })
    // this.removeBot(id)
  }

  // removeBot = (id) => { //removes bot from bots array
  //   let updatedBots = this.state.bots.filter( bot => bot.id !== id);

  //   this.setState({
  //     bots: updatedBots
  //   })
  // }

  removeFromArmy = (id) => { // removes a bot from myArmy
    // console.log(id)
    let myArmy = this.state.myBotArmy.slice();
    if (myArmy.length > 0) {
      let updatedArmy = myArmy.filter( bot => bot.id !== id)
      // console.log(updatedArmy)
      this.setState({
        myBotArmy: updatedArmy
      })
    }
  }

  render() {
    // console.log(this.state.myBotArmy)
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} myBotArmy={this.state.myBotArmy} /> 
        <BotCollection enlistBot={this.enlistBot} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
