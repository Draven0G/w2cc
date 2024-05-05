// BotCollection.js
import React from 'react';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Picture: {bot.avatar_url}</p>

          <p>Class: {bot.class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
