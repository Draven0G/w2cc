import React from 'react';

const BotSpecs = ({ bot }) => {
  return (
    <div>
      <h2>Bot Specs</h2>
      <h3>{bot.name}</h3>
      <p>Class: {bot.class}</p>
      <p>Picture: {bot.avatar_url}</p>

      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  );
};

export default BotSpecs;
