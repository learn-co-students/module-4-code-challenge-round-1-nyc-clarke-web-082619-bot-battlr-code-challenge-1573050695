import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.props.shownBots.map(bot => 
					<BotCard bot={bot} clickHandle={this.props.clickHandle} />	
				)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
