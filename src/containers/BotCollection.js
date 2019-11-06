import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  state = {
	  filterSelected: 'None'
  }

  onChangeFilter = (event) => {
	this.setState({
		filterSelected: event.target.value
	})
  }

  render(){
  	return (
  	  <div className="ui four column grid">
			<select onChange={this.onChangeFilter} value={this.state.filterSelected} >
				<option value='None'>None</option>
				<option value='Assault'>Assault</option>
				<option value='Defender'>Defender</option>
				<option value='Support'>Support</option>
			</select>

    		<div className="row">
				{this.state.filterSelected === 'None' ?
					this.props.shownBots.map(bot => 
						<BotCard bot={bot} clickHandle={this.props.clickHandle} />	
					)
					:
					this.props.allBots.filter(bot => bot.bot_class === this.state.filterSelected).map(bot => 
						<BotCard bot={bot} clickHandle={this.props.clickHandle} />	
					)
				}
    		  {/* Collection of all bots */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
