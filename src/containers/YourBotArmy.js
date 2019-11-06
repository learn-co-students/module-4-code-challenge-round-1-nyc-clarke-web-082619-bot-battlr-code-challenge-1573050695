import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  renderBotArmy = () =>{
    let botArray = [];
    for(const bot of this.props.botsArmy){
      botArray.push(<BotCard removeBotFromArmy={this.props.removeBotFromArmy} {...bot}/>);
    }
    return botArray;
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
