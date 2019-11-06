import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  state ={
    botCollection: [],
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
    let allBots = this.state.botCollection;

    let targetBot = allBots.find(bot => bot.id == id);

    this.setState({selectedBot: targetBot, listView: false});
  }


  enlistBot = () => {

    let newCollection = this.state.botCollection.map(bot => {
      if (bot.id == this.state.selectedBot.id){
        return {...bot, enlisted: true}
      } else {
        return bot
      }
    })

    this.setState({botCollection: newCollection, listView: true})
  }




  removeBot = (id) => {

    let newCollection = this.state.botCollection.map(bot => {
      if (bot.id == id){
        return {...bot, enlisted: false}
      } else {
        return bot
      }
    })

    this.setState({botCollection: newCollection, listView: true})
  }

  setListView = () => {
    this.setState({listView: true})
  }

  render() {

    if (this.state.listView){
    return (
      <div>
        <YourBotArmy botCollection={this.state.botCollection} removeBot={this.removeBot} setSelectedBot={this.setSelectedBot}/>
        < BotCollection botCollection={this.state.botCollection} 
        setSelectedBot={this.setSelectedBot}
        removeBot={this.removeBot}
        />
      </div>
    )} else {
      return(
        <div>
        <YourBotArmy botCollection={this.state.botCollection} removeBot={this.removeBot} setSelectedBot={this.setSelectedBot}/>
         <BotSpecs bot={this.state.selectedBot} 
      enlistBot={this.enlistBot}
      setListView={this.setListView}
      removeBot={this.removeBot}/>
      </div>)
    }
  }

}

export default BotsPage;
