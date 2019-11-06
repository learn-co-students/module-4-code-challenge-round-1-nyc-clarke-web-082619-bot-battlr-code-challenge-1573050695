import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    botCollection: [],
    yourBotArmy: [],
    selectedBot: null,
    listView: true
  }

  getBots = () => {
    fetch(URL)
    .then(res => res.json())
    .then(botData => {
      this.setState({botCollection: botData})
    })
  }

  componentDidMount() {
    this.getBots()
  }

  setSelectedBot = (id) => {
    let allBots = this.state.botCollection.concat(this.state.yourBotArmy);

    let targetBot = allBots.find(bot => bot.id == id);

    this.setState({selectedBot: targetBot, listView: false});
  }

  enlistBot = () => {
    let newCollection = this.state.botCollection.map(bot => {
      if (bot.id != this.state.selectedBot.id){
        return bot;
      } else {
        return null;
      }
    });

    newCollection = newCollection.filter(bot => bot)
    let newYourBotArmy = this.state.yourBotArmy.concat({...this.state.selectedBot, enlisted: true })

    this.setState({ botCollection: newCollection, yourBotArmy: newYourBotArmy, listView: true})
  }

  removeBot = (id) => {
    let targetBot = this.state.yourBotArmy.find(bot => bot.id == id)

    let newYourBotArmy = this.state.yourBotArmy.map(bot => {
      if (bot.id != id){
        return bot;
      } else {
        return null;
      }
    });

    newYourBotArmy = newYourBotArmy.filter(bot => bot)
    let newCollection = this.state.botCollection.concat({...targetBot, enlisted: false })

    this.setState({ botCollection: newCollection, yourBotArmy: newYourBotArmy})
  }

  setListView = () => {
    this.setState({listView: true})
  }

  render() {

    if (this.state.listView){
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy yourBotArmy={this.state.yourBotArmy}  removeBot={this.removeBot}/>
        < BotCollection botCollection={this.state.botCollection} 
        setSelectedBot={this.setSelectedBot}
        />
      </div>
    )} else {
      return(
        <div>
        <YourBotArmy yourBotArmy={this.state.yourBotArmy} removeBot={this.removeBot}/>
         <BotSpecs bot={this.state.selectedBot} 
      enlistBot={this.enlistBot}
      setListView={this.setListView}/>
      </div>)
    }
  }

}

export default BotsPage;
