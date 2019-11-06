import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    selectedBot: null,
    selectedBots: new Set()
  }
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots").then(resp=> resp.json()).then(resp => this.setState({bots: resp}))
  }


    toggleEnlist = (id, parent) => {
    let bot = this.state.bots.find(bot => bot.id === id)
     if (!this.state.selectedBots.has(bot)){
    this.setState({
      selectedBots: this.state.selectedBots.add(bot),
      selectedBot: null
    }) } else if (parent === "My Bot"){
      let newBots = this.state.selectedBots
      newBots.delete(bot)
      this.setState({
        selectedBots: newBots})
      }
    }

    selectBot = (id) => {
      let bot = this.state.bots.find(bot => bot.id === id)
      this.setState({
        selectedBot: bot
      })
    }

    goBack = () =>{
      this.setState({selectedBot: null})
    }



  render() {
    return (
      <div>
        <YourBotArmy {...this.state} toggleEnlist={this.toggleEnlist}/>
        {this.state.selectedBot ? <BotSpecs bot={this.state.selectedBot} toggleEnlist={this.toggleEnlist} goBack={this.goBack}/> : <BotCollection {...this.state} selectBot={this.selectBot} toggleEnlist={this.toggleEnlist} />}
        
      </div>
    );
  }

}

export default BotsPage;
