import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";
import { runInThisContext } from "vm";

class BotCollection extends React.Component {
  
	state = {
		selectedBot: {}
	}

showBot = (id) => {
	this.props.allBots.map(bot => bot.id === id ?
		this.setState({
			selectedBot: bot
		})
	: null
	)
}

showAllBots = () => {
	this.setState({
		selectedBot: {}
	})
}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(bot => <BotCard key={bot.id}{...bot} enlistBot={this.props.enlistBot} showBot={this.showBot}/>)}
    		  <BotSpecs selectedBot={this.state.selectedBot} enlistBot={this.props.enlistBot} showAllBots={this.showAllBots}/>
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
