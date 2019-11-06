import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  renderBots() {
    return this.props.bots.map((bot, i) => (
      <BotCard updateBot={this.props.updateBot} key={i} {...bot} />
    ));
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
