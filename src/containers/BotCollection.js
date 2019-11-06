import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
renderBots() { 
	if(this.props.botArmy === false) { 
	return this.props.bots.map(bot => { 
		return <BotCard bot={bot} updateBots={this.props.updateBots}/> 
		}
	)
	}
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
