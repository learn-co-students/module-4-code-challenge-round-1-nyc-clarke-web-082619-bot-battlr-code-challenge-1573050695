import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(props){
    super(props)
  }


  renderBots=()=>{
    return(
    this.props.userBots.map(bot => {
      return (
        <BotCard 
        {...bot} 
        key={bot.id}
        handleRemove={this.props.handleRemove}
        />
      )
    })
    )
  }

  render(){
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
