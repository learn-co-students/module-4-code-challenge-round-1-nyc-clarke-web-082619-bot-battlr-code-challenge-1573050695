import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBotCards = () => {
	  return this.props.bots.map(bot => <BotCard toggleEnlist={this.props.toggleEnlist}selectBot={this.props.selectBot} key={bot.id} parent={"Bot Collection"} bot={bot} />)
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
