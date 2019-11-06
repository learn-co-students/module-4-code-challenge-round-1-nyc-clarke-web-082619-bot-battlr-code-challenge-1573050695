import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myArmy: [],
  }


  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          bots: data
        })
      })
  }

  joinArmy = (bot) => {
    if(this.state.myArmy.includes(bot)){
      null
    } else {
      this.setState({
        myArmy: [...this.state.myArmy, bot]
      })
    }
  }



  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} myArmy={this.state.myArmy} joinArmy={this.joinArmy}/>
        <YourBotArmy bots={this.state.myArmy}/>
      </div>
    );
  }

}

export default BotsPage;
