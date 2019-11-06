import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
const botAPI = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  constructor(){
    super();
    this.state={
      botData: [],
      myBots: [],
      showView: false
    }
  }
 
  componentDidMount() {
    fetch(botAPI)
    .then(resp => resp.json())
    .then(data => this.setState({
      botData: data
    }))
  }

  addBot = (id) => {
    let selectedBot = this.state.botData.find(bot => bot.id === id)
    this.setState({
      botData: this.state.botData.filter(bot => bot.id !== selectedBot.id),
      myBots: [...this.state.myBots, selectedBot]
    })
  }

  removeBot = (id) => {
    let botToRemove = this.state.myBots.find(bot => bot.id === id)
    this.setState({
      botData: [...this.state.botData, botToRemove],
      myBots: this.state.myBots.filter(bot => bot.id !== botToRemove.id)
    })
  }

  renderBotSpecs = (id) => {
    let targetBot = this.state.botData.find(bot => bot.id === id)
    console.log(targetBot)
    this.setState({
      showView: !this.state.showView
    })
    if (this.state.showView) {
      return(
        <BotSpecs key={targetBot.id} bot={targetBot} />
      )
      } 
  }

  handleToggle = () => {
    this.setState({
      showView: !this.state.showView
    })
    this.renderBotSpecs
  }

  render() {
    return (
      <div>
        <YourBotArmy bot={this.state.myBots} removeBot={this.removeBot}/>
        <BotCollection bot={this.state.botData} addBot={this.addBot} renderBotSpecs={this.renderBotSpecs} showView={this.state.showView}/>
      </div>
    );
  }

}
//tried setting it here in the render above  and passing
// renderBotSpecs={this.renderBotSpecs} showView={this.state.showView}
export default BotsPage;
