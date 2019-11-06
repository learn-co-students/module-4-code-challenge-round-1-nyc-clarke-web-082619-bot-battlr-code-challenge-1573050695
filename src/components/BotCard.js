import React from "react";


const BotCard = props => {
  const { bot } = props;

  //my first thought was to convert this to a class and add the show details to state here, but 
  // the way the props were defined here threw me off. I would've then used the onClick here to either show botCard or Bot Specs


// export default class BotCard extends React.Component {
//   constructor(){
//     super();
//     this.state ={
//       shownDetails: false
//     }
//   }

//   toggleDetails = () => {
//     this.setState({
//       shownDetails: true
//     })
//   }

//   renderSpecs = () => {
//     !this.state.shownDetails ?
//     this.props.renderBotSpecs()
//     :

//   }

  
  //couldn't figure this conversion out
  // const { bot } = props;


  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        // onClick={() => props.addBot ? props.addBot(bot.id) : props.removeBot(bot.id)}

        //below the method was passed down from  so that onclick the state would change and display specs instead
        onClick={() => props.renderBotSpecs(bot.id)}
      >

        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;



// import React from "react";

// const BotCard = props => {
//   const { bot } = props;

//   let botType;

//   switch (bot.bot_class) {
//     case "Assault":
//       botType = <i className="icon military" />;
//       break;
//     case "Defender":
//       botType = <i className="icon shield" />;
//       break;
//     case "Support":
//       botType = <i className="icon ambulance" />;
//       break;
//     default:
//       botType = <div />;
//   }

//   return (
//     <div className="ui column">
//       <div
//         className="ui card"
//         key={bot.id}
//         onClick={() => props.addBot ? props.addBot(bot.id) : props.removeBot(bot.id)}
//       >
//         <div className="image">
//           <img alt="oh no!" src={bot.avatar_url} />
//         </div>
//         <div className="content">
//           <div className="header">
//             {bot.name} {botType}
//           </div>

//           <div className="meta text-wrap">
//             <small>{bot.catchphrase}</small>
//           </div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat" />
//             {bot.health}
//           </span>

//           <span>
//             <i className="icon lightning" />
//             {bot.damage}
//           </span>
//           <span>
//             <i className="icon shield" />
//             {bot.armor}
//           </span>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default BotCard;

