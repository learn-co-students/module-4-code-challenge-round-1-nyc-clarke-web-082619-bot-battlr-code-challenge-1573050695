import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBots = () => {
    return this.props.bot.map(bot => {
      return(
        <BotCard key={bot.id} bot={bot} removeBot={this.props.removeBot}/>
      )
    })
  }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
