import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBotCards = () => {
	  return this.props.bots.map(bot => <BotCard selectBots={this.props.selectBots} key={bot.id} bot={bot} />)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBotCards()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
