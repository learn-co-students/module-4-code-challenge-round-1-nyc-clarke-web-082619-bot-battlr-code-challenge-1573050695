import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBotCards = () => {
	  return Array.from(this.props.selectedBots).map(bot => <BotCard key={bot.id} parent={"My Bot"} toggleEnlist={this.props.toggleEnlist}selectBots={this.props.selectBots} bot={bot} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCards()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
