import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {

  state = {
    bots: new Map(),
    botsArmy: new Set()
  }
  componentDidMount() {
    fetch(API)
      .then (resp => resp.json())
      .then (robots => {
        let botsMap = new Map();
        robots.map(robot => botsMap.set(robot.id,robot));
        this.setState(()=>({bots: botsMap}));
      })
  }
  addBotToArmy = (id) => {
    let botSet = this.state.botsArmy;
    let newBot = this.state.bots.get(id);
    botSet.add(newBot)
    this.setState(()=>({botsArmy: botSet})) 
  }

  removeBotFromArmy = (id) => {
    let botSet = this.state.botsArmy;
    let removeThisbot = this.state.bots.get(id);
    botSet.delete(removeThisbot);
    this.setState(()=>({botsArmy: botSet}))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy removeBotFromArmy={this.removeBotFromArmy} botsArmy={this.state.botsArmy}/>
        <BotCollection addBotToArmy={this.addBotToArmy} bots={this.state.bots} /> 
        
      </div>
    );
  }

}

export default BotsPage;
