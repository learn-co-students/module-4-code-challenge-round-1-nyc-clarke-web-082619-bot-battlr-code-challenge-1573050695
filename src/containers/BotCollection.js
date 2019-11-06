import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  makeBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard {...bot} handleBotClick={this.props.handleBotClick} />;
    });
  };

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">{this.makeBots()}</div>
      </div>
    );
  }
}

export default BotCollection;
