import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const URL ='https://bot-battler-api.herokuapp.com/api/v1/bots/'

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots:[],
    userBots: []
  }

  fetchBots=()=>{
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  componentDidMount(){
    this.fetchBots()
  }

  handleClick=(e)=>{
    // the purpose of this function is to return true or false 
    // if the bot is in the army or if the bot is in the collection
    console.log('i was clicked')
  }

  handleAddBot=(bot)=>{
    // if(!this.state.userBots.filter(b => b.id !== bot.id)){
    if(!this.state.userBots.includes(bot)){
      return(
      this.setState({
        userBots: [...this.state.userBots, bot]
      })
      )
    }
  }

  handleRemove=(bot)=>{
    let copy = [...this.state.userBots]
    const newState = copy.filter(b => b.id !== bot.id)
    this.setState({
      userBots: newState
    })
  }

  // click should display the

  render() {
    return (
      <div>
        <YourBotArmy 
        userBots={this.state.userBots}
        handleRemove={this.handleRemove}
        />
        <BotCollection 
        bots={this.state.bots}
        handleAddBot={this.handleAddBot}
        handleRemove={this.handleRemove}
        />
      </div>
    );
  }

}

export default BotsPage;
