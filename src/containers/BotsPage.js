import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const botsAPI = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: []
  };
  componentDidMount() {
    fetch(botsAPI)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          bots: data
        });
      });
  }

  updateBot = id => {
    let updatedBot = this.state.bots.map(bot =>
      bot.id === id ? { ...bot, enlisted: !bot.enlisted } : bot
    );
    this.setState({
      bots: updatedBot
    });
  };

  updatePage = id => {
    let updatedPage = this.state.bots.map(bot =>
      bot.id === id ? { ...bot, show: !bot.show } : bot
    );
    this.setState({
      bots: updatedPage
    });
  };

  renderPage = (id) => {
    return this.props.bots.map((bot, i) => {
      if (bot.show) {
        return <BotCollection updateBot={this.updateBot} bots={this.state.bots} />
      } else {
        return <BotSpecs />
      }
    })
  }

  render() {
    return (
      <div>
        {<YourBotArmy updateBot={this.updateBot} bots={this.state.bots} />}
        {<BotSpecs />}
        {<BotCollection updateBot={this.updateBot} bots={this.state.bots} />}
      </div>
    );
  }
}

export default BotsPage;
