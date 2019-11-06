import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    availableBots: [],
    myArmy: [],
    specBot: null
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

  //define the selected bot to show specs
  showSpecView = (id) => {
    let selectedBot = this.state.availableBots.find(bot => bot.id === id);
    if(selectedBot){
      this.setState({
        specBot: selectedBot
      })
    }
    if(selectedBot === null){
      let selectedBot = this.state.myArmy.find(bot => bot.id === id);
      this.setState({
        specBot: null
      })
      this.enlist(selectedBot.id)
    }
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
    this.showSpecView(null)
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
          showSpecView={this.showSpecView}
          specBot={this.state.specBot}
        />
      </div>
    );
  }

}

export default BotsPage;
