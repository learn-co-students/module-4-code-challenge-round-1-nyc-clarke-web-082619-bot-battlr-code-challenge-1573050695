import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <YourBotArmy army={this.props.army} addToArmy={this.props.addToArmy}/>
        <BotCollection bots={this.props.bots} addToArmy={this.props.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
