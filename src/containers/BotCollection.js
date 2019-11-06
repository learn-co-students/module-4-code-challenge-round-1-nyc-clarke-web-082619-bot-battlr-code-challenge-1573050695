import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //your code here
  state = {
	  detailsView: false
  }


  renderBots = () => {
	  return this.props.bots.map( bot => {
		  return <BotCard toggleDetails={this.toggleDetails} enlistBot={this.props.enlistBot} name={'bots'} bot={bot} />
	  })
  }

  renderDetails = (id) => {  // onClick of BotCard, render these details of single Bot
	  let showBot = this.props.bots.find( bot => bot.id === id );
	//   console.log(showBot)
		  return <BotSpecs bot={showBot}/>
}
  

  toggleDetails = (id) => { //if details view is false, render all images, if true, render botSpecs
	this.setState({
		detailsView: !this.state.detailsView
	})

	if ( !this.state.detailsView ){
			this.renderBots()
		} else {
			this.renderDetails(id)
		}
  	}

  render(){
	//   console.log(this.state.detailsView)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/* {this.renderBots()} */}
    		  Collection of all bots
			  { !this.state.detailsView ? this.renderBots() : this.renderDetails() } 
			  {/* {this.renderBots()} might not need ternary above */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
