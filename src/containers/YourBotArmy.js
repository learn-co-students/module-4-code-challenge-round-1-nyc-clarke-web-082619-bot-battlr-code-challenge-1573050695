import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      // <>
      // <button className='center' onClick={this.props.clickDisband}>Discharge All</button>
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.enlistedBots.map(bot => {
              return < BotCard bot={bot} clickHandle={this.props.clickHandle} />
            })}
          </div>
        </div>
      </div>
      // </>
    );
  }
  
};

export default YourBotArmy;
