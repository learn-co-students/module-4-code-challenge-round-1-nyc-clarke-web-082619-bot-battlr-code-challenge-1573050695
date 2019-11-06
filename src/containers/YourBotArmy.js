import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  generateBotCards = () => {
	  return this.props.myArmy.map((bot, i) => <BotCard enlist={this.props.enlist} key={i}{...bot}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
           {this.generateBotCards()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
