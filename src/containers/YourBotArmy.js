import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots(){
    let keys = Array.from(this.props.armyBot);    
	  return keys.map(key => <BotCard key={key} bot={this.props.bots[key]} handleArmyClick={this.props.handleArmyClick} from={"remove"}/>)
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            
            {/*...and here...*/}
            Your Bot Army
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
