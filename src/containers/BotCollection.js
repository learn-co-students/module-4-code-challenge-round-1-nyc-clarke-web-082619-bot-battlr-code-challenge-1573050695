import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots(){
	  let keys = Object.keys(this.props.bots)
	  return keys.map(key => <BotCard key={key} bot={this.props.bots[key]} handleSpecChange={this.props.handleSpecChange}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.renderBots()}
    		  {/*...and here..*/}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
