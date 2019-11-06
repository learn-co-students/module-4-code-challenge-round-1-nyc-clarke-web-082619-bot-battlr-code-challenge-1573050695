import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBotCards = () =>{
	  return this.props.botCollection.map((bot) => {
		  return <BotCard bot={bot} key={bot.id} setSelectedBot={this.props.setSelectedBot}/>
	  })
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
