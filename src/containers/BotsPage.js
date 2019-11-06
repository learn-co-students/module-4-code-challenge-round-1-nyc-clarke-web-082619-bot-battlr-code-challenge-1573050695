import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';
import { Search, Dropdown } from 'semantic-ui-react'
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {

  state = {
    bots: new Map(),
    botsArmy: new Set(),
    showBotBool: false,
    botToShow: {},
    searchTerm: "",
    filter: ""
  }

  componentDidMount() {
    fetch(API)
      .then (resp => resp.json())
      .then (robots => {
        let botsMap = new Map();
        robots.map(robot => botsMap.set(robot.id,robot));
        this.setState(()=>({bots: botsMap}));
      })
  }
  addBotToArmy = (id) => {
    let botSet = this.state.botsArmy;
    let newBot = this.state.bots.get(id);
    botSet.add(newBot)
    this.setState(()=>({botsArmy: botSet,showBotBool: false})) 
  }

  removeBotFromArmy = (id) => {
    let botSet = this.state.botsArmy;
    let removeThisbot = this.state.bots.get(id);
    botSet.delete(removeThisbot);
    this.setState(()=>({botsArmy: botSet}))
  }

  showBotSpecs = (id) => {
    let bot = this.state.bots.get(id);
    this.setState(() => ({showBotBool: true, botToShow: bot})) 
  }

  goBack = () => {
    this.setState(()=>({showBotBool:false, botToShow: {}}))
  }

  searchBots =(event,value) => {
     this.setState(()=>({searchTerm: value.value}))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy removeBotFromArmy={this.removeBotFromArmy} botsArmy={this.state.botsArmy}/>
        {this.state.showBotBool ? 
          <BotSpecs goBack={this.goBack} addBotToArmy={this.addBotToArmy} {...this.state.botToShow}/> 
        : 
          <div>
            {/* <Dropdown 
            class="filter"
            value={this.state.filter}
            options={"Assault"}

            onChange={e => {
              this.setState({ city: e.value });
            }}
            placeholder='Select a Type'
				    /> */}
            <Search className="searchBar" value={this.state.searchTerm} onSearchChange={((event,value) => this.searchBots(event,value))} showNoResults={false}/>
            <BotCollection searchTerm={this.state.searchTerm} showBotSpecs={this.showBotSpecs} bots={this.state.bots} /> 
          </div>
        }
      </div>
    );
  }

}

export default BotsPage;
