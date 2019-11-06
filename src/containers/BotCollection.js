import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {

	//tried passing this down but the conditional render to toggle views did not work on the click in the botCard

	constructor() {
		super();
		this.state ={
			shownDetails: false
		}
	}

  renderBots = () => {
	  return this.props.bot.map( bot => {
		  if(this.state.shownDetails) {
			{this.props.renderBotSpecs}
		  }
		  else {
		return(
			<BotCard key={bot.id} bot={bot} addBot={this.props.addBot} renderBotSpecs={this.props.renderBotSpecs} showView={this.props.showView}/>
		)
		  }
	  })
  }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			Collection of all bots
    		  {this.renderBots()}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
