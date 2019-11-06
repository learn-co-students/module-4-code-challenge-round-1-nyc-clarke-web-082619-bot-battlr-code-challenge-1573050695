import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  generateBotCards = () => {
	  return this.props.availableBots.map((bot,i) => <BotCard enlist={this.props.enlist} key={i}{...bot}/>)
  }

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.generateBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
