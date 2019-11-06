import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.yourArmy.map(bot => <BotCard key={bot.id}{...bot} dischargeBot={this.props.dischargeBot}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
