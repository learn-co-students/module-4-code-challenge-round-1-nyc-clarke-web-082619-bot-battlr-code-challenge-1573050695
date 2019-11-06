import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from "./YourBotArmy";
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  showOrNot = () => {
    if(this.props.showSpec){
       return <BotSpecs bot={this.props.bot} showAllBots={this.props.showAllBots} addToArmy={this.props.addToArmy}/>
    }else{
        return <BotCollection bots={this.props.bots} addToArmy={this.props.addToArmy} show={this.props.show}/>
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.props.army} addToArmy={this.props.addToArmy} show={this.props.show}/>
        {this.showOrNot()}
      </div>
    );
  }

}

export default BotsPage;
