import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = { 
    bots: [],
    botArmy: false 
  }

  componentDidMount() { 
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(resp => this.setState({
        bots: resp
      }))
  }

  /* Here I tried to create the botArmy state inside of updateBots 
  so that it only created the state on that bot. The goal was to be able to toggle
  between true and false. When I console log I am able to get back the id that 
  I need however it keeps changing all states instead of just 1.  */ 

  updateBots = (id) => { 
    let bots = this.state.bots
     return this.state.bots.map(bot => { 
        if(bot.id === id) { 
          this.setState({ 
            botArmy: true 
            //wanted this to be botArmy: !this.state.botArmy 
          })
      } else {
        return bots
      }
    })
  }

  
  /* I also tried invoking update bots in the bots attribute so that way it would run through
  and hit the else statement without changing it to true.
  */ 
  render() {
    return (
      <div>
        <YourBotArmy updateBots={this.updateBots} bots={this.state.bots} botArmy={this.state.botArmy} /> 
        <BotCollection updateBots={this.updateBots} bots={this.state.bots} botArmy={this.state.botArmy} /> 
      </div>
    );
  }

  /* If I were able to continue... 
  I would change the onClick to show specs first and then create another onlick for the button 
  in specs to toggle into list view */ 

}

export default BotsPage;
