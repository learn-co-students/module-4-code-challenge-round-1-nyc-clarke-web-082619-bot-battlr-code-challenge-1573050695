import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBotCards = () =>{
    let botArmy = this.props.botCollection.filter(bot => bot.enlisted)
	  return botArmy.map((bot) => {
		  return <BotCard bot={bot} key={bot.id} setSelectedBot={this.props.setSelectedBot} removeBot={this.props.removeBot}/>
	  })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCards()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
