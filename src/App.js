import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state={
    bots: [],
    army: [],
    showSpec: false,
    bot: null
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp=>resp.json())
    .then(data=>{
      // console.log(data);
      this.setState({
        bots: data
      })
    })
  }

  addToArmy =(id) =>{
    // console.log(id);
    let item = this.state.bots.find(bot=> bot.id===id);

    if(this.state.army.includes(item)){
      let array = this.state.army;
      let index = this.state.army.indexOf(item);
      array.splice(index,1);
      // console.log(array)
      // console.log(index);
      this.setState({
        army: array
      })
    }else{
      this.setState({
        army: [...this.state.army, item]
      })
    }
  }

  show = (id) => {
    // console.log(id);
    let item = this.state.bots.find(bot=> bot.id === id);
    this.setState({
      showSpec: true,
      bot: item
    })
  }
 
  showAllBots = () => {
    this.setState({
      showSpec: false,
      bot: null
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} 
              addToArmy={this.addToArmy}
              army={this.state.army}
              show={this.show}
              showSpec={this.state.showSpec}
              bot={this.state.bot}
              showAllBots={this.showAllBots}
              />
      </div>
    );
  }
}

export default App;
