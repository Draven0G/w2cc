// YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Picture: {bot.avatar_url}</p>
          <p>Class: {bot.class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => releaseBot(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
