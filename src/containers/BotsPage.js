import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    availableBots: [],
    myArmy: []
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allBots: data,
        availableBots: data
      })
    })
  }

  componentDidMount = () => {
    this.fetchBots()
  }

  enlist = (id) => {
    let selectedBot = this.state.allBots.find(bot => bot.id === id);
    let copyAvailable = [...this.state.availableBots];
    let copyMyArmy = [...this.state.myArmy];

    let checkBot = copyAvailable.find(bot => bot.id === id)
    //if the bot is available
    if(checkBot && !copyMyArmy.find(bot => bot.id === id)){
      copyMyArmy.push(selectedBot)
      copyAvailable = copyAvailable.filter(bot => bot.id !== id)
    }
    else {
      copyMyArmy = copyMyArmy.filter(bot => bot.id !== id)
      copyAvailable.push(selectedBot)
    }
    this.setState({
      availableBots: copyAvailable,
      myArmy: copyMyArmy
    })

  }

  render() {

    console.log(this.state.myArmy)
    return (
      <div>
        <YourBotArmy 
          enlist={this.enlist}
          myArmy={this.state.myArmy}
        />
        <BotCollection 
          enlist={this.enlist}
          availableBots={this.state.availableBots}

        />
      </div>
    );
  }

}

export default BotsPage;
