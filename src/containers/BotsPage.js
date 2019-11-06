import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    allBots: [],
    shownBots: [],
    enlistedBots: [],
    specsView: false,
    selectedBot: {}
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

  clickEnlist = (bot) => {
    !this.state.enlistedBots.includes(bot) ?
    this.setState(prevState => ({
      enlistedBots: [...prevState.enlistedBots, bot],
      specsView: false
    }))
    : 
    null
  }

  clickDischarge = (bot) => {
    this.state.enlistedBots.includes(bot)?
    this.setState(prevState => ({
      enlistedBots: [...prevState.enlistedBots.filter(eachBot => eachBot !== bot)]
    }))
    :
    null
  }

  clickSelectBot = (bot) => {
    let clickedBot = this.state.allBots.find(eachBot => eachBot == bot)
    this.setState({
      specsView: true,
      selectedBot: clickedBot
    })
  }

  clickUnselect = () => {
    this.setState({
      specsView: false,
      selectedBot: {}
    })
  }

  // clickDisband = () =>{
  //   this.setState({
  //     enlistedBots: []
  //   })
  //   console.log(this.state.enlistedBots)
  // }

  render() {
    return (
      <div>
        < YourBotArmy 
          {...this.state} 
          clickHandle={this.clickDischarge} 
          // clickDisband={this.clickDisband} 
        />
        {!this.state.specsView ?
          < BotCollection {...this.state} 
            // clickHandle={this.clickEnlist} 
            clickHandle={this.clickSelectBot}
          />
          :
          < BotSpecs bot={this.state.selectedBot} clickUnselect={this.clickUnselect} clickEnlist={this.clickEnlist} />
        }
      </div>
    );
  }
}

export default BotsPage;
