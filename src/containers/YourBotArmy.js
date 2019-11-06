import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderArmy = () => {
    return this.props.myBotArmy.map( bot => {
      return <BotCard removeFromArmy={this.props.removeFromArmy} name={'army'} bot={bot} /> 
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            { this.renderArmy() }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
