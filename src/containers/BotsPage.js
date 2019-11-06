import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    selectedBots: new Set()
  }
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots").then(resp=> resp.json()).then(resp => this.setState({bots: resp}))
  }


  selectBots = (event, id, parent) => {
    let bot = this.state.bots.find(bot => bot.id === id)
     if (!this.state.selectedBots.has(bot)){
    this.setState({
      selectedBots: this.state.selectedBots.add(bot)
    }) } else if (parent === "My Bot"){
      let newBots = this.state.selectedBots
      newBots.delete(bot)
      this.setState({
        selectedBots: newBots})
      }
  }


  render() {
    return (
      <div>
        <YourBotArmy {...this.state} selectBots={this.selectBots} />
        <BotCollection {...this.state} selectBots={this.selectBots} />
      </div>
    );
  }

}

export default BotsPage;
