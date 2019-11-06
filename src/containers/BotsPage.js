import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = { 
    bots: {},
    armyBot: new Set(),
    specPage: false,
    selectedBot: 101
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(data =>{
      let hashMap = {}
      data.map(bot => hashMap[bot.id]= bot)
      this.setState({
        bots: hashMap
      })
    })
  }

  handleArmyClick = (id,action) => {
    if(action === "add"){
      let curSet = this.state.armyBot.add(id)
      this.setState({
        armyBot: curSet,
        specPage: false
      })
    }else{
      this.state.armyBot.delete(id)
      this.setState({
        armyBot: this.state.armyBot,
        specPage: false
      })
    }
  } 

  handleSpecChange = (id) =>{
    this.setState({
      specPage: !this.state.specPage,
      selectedBot: id
    })
  }


  render() {
    console.log()
    return (
      <div>
        <YourBotArmy {...this.state} handleArmyClick={this.handleArmyClick} handleSpecChange={this.handleSpecChange}/>
        
        {!this.state.specPage ? <BotCollection {...this.state} handleSpecChange={this.handleSpecChange}/> : <BotSpecs {...this.state} bot={this.state.bots[`${this.state.selectedBot}`]} handleSpecChange={this.handleSpecChange} handleArmyClick={this.handleArmyClick}/>}
        
        // {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
