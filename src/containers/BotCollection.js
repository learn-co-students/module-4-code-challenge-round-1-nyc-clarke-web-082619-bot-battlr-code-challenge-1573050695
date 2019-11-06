import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {/* ...and here.. */}
			  {this.props.bots.map(bot=><BotCard {...bot} key={bot.id} addToArmy={this.props.addToArmy}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
