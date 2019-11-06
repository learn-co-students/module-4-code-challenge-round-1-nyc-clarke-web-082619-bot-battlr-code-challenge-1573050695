import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  makeBots = () => {
    return this.props.enlisted.map(bot => {
      return <BotCard {...bot} handleBotClick={this.props.handleBotClick} />;
    });
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{this.makeBots()}</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
