import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";
import BotSpecs from "../components/BotSpecs.js";
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      enlisted: [],
      details: false,
      selectedBot: {}
    };
  }

  findBot = (id, bots) => {
    return bots.find(bot => {
      return bot.id === id;
    });
  };

  handleBotArmyclick = id => {
    let enlisted = [...this.state.enlisted];
    enlisted = enlisted.filter(bot => {
      return bot.id !== id;
    });
    this.setState({
      enlisted: enlisted
    });
  };

  handleBotClick = id => {
    let bots = [...this.state.bots];
    let bot = this.findBot(id, bots);
    //let enlisted = [...this.state.enlisted];
    this.setState({
      details: true,
      selectedBot: bot
    });
  };

  handleListClick = () => {
    this.setState({
      details: false,
      selectedBot: {}
    });
  };

  findSelectedBotInEnlisted = (bot, enlisted) => {
    let id = bot.id;
    return enlisted.find(bot => {
      return bot.id === id;
    });
  };

  handleEnlistClick = () => {
    let enlisted = [...this.state.enlisted];
    let selectedBot = this.state.selectedBot;
    let selectedBotInEnlisted = this.findSelectedBotInEnlisted(
      selectedBot,
      enlisted
    );
    if (selectedBotInEnlisted !== undefined) {
      return false;
    }
    enlisted.push(selectedBot);
    this.setState({
      enlisted: enlisted,
      details: false,
      selectedBot: {}
    });
  };

  getBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(json => {
        this.setState({
          bots: json
        });
      });
  };

  componentDidMount() {
    this.getBots();
  }

  render() {
    return (
      <div>
        {
          <YourBotArmy
            enlisted={this.state.enlisted}
            handleBotClick={this.handleBotArmyclick}
          />
        }
        {this.state.details ? (
          <BotSpecs
            {...this.state.selectedBot}
            handleListClick={this.handleListClick}
            handleEnlistClick={this.handleEnlistClick}
          />
        ) : (
          <BotCollection
            bots={this.state.bots}
            handleBotClick={this.handleBotClick}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
