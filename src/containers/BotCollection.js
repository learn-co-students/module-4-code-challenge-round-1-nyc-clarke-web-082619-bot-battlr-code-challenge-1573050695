import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here
  constructor(props){
	  super(props)
	  this.state={
		botSpec: null
	  }
  }

  handleSpecClick=(id)=>{

  }

  renderBots=()=>{
	  return(
	  this.props.bots.map(bot => {
		  return (
			  <BotCard 
			  {...bot} 
			  key={bot.id} 
			  handleAddBot={this.props.handleAddBot} 
			//   handleRemove={this.props.handleRemove}
			  />
		  	)
	  	})
	  )
  }
  

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
