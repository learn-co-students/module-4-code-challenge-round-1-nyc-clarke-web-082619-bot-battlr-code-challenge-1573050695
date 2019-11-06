import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
	let botsArray = [];
	for(const bot of this.props.bots.values()){
		botsArray.push(< BotCard addBotToArmy={this.props.addBotToArmy} {...bot}/>);
	}
	return botsArray
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
