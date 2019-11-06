import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
			Collection of all bots
    		<div className="row">
			  {this.props.bots.map(bot=><BotCard {...bot} key={bot.id} addToArmy={this.props.addToArmy} show={this.props.show}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
