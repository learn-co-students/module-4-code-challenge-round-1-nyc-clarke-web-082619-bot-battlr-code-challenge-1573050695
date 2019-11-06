import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    shownBots: [],
    enlistedBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(
      data => {
        this.setState({
          allBots: [...data],
          shownBots: [...data]
        })
      }
    )
  }

  clickEnlist = (id) => {
    let botToEnlist = this.state.allBots.find(bot => bot.id == id)
    !this.state.enlistedBots.includes(botToEnlist) ?
    this.setState(prevState => ({
      enlistedBots: [...prevState.enlistedBots, botToEnlist]
    }))
    : 
    null
  }

  clickDischarge = (id) => {
    let botToDischarge = this.state.allBots.find(bot => bot.id == id)
    this.state.enlistedBots.includes(botToDischarge)?
    this.setState(prevState => ({
      enlistedBots: [...prevState.enlistedBots.filter(bot => bot.id !== id)]
    }))
    :
    null
  }

  render() {
    console.log(this.state.enlistedBots)
    return (
      <div>
        < YourBotArmy {...this.state} clickHandle={this.clickDischarge}/>
        < BotCollection {...this.state} clickHandle={this.clickEnlist} />
      </div>
    );
  }

}

export default BotsPage;
