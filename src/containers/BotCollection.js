import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here

  generateBotCards = () => {
	  if(this.props.specBot){
		  return <BotSpecs 
		  specBot={this.props.specBot}
		  showSpecView={this.props.showSpecView}
		  enlist={this.props.enlist}  
		  />
	  }
	  else {
		  return this.props.availableBots.map((bot,i) => <BotCard key={i}{...bot}
			showSpecView={this.props.showSpecView}
			enlist={this.props.enlist} 
		   />)
	  }
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
