import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'


class BotCollection extends React.Component {
  //your code here
	state = {
		currentBot: {},
	}

	showBot = (bot) => {
		this.setState({
			currentBot: bot
		})
	}

	clearBot = () => {
		this.setState({
			currentBot: {}
		})
	}

	renderBots = () => {
		if(!this.state.currentBot.id){
			return (
			<div className="row">
    		  Collection of all bots
				{this.props.bots.map(bot => 
				<BotCard 
				key={bot.id} 
				bot={bot} 
				showBot={this.showBot}
				/>)}
    		</div>
			)
		} else {
			return(
				<BotSpecs
				bot={this.state.currentBot}
				goBack={this.clearBot}
				joinArmy={this.props.joinArmy}
				/>)
		}
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		{this.renderBots()}
  	  </div>
  	);
  }

};

export default BotCollection;
