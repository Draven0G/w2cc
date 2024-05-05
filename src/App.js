import React, { useState } from 'react';
import BotCollection from './BotCollection';
import BotSpecs from './BotSpecs';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';

import data from './db.json';

const App = () => {
  const [currentPage, setCurrentPage] = useState('collection');
  const [botCollection, setBotCollection] = useState(data.bots);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null); // State to store the selected bot

  // Function to enlist a bot
  const enlistBot = (bot) => {
    if (!yourBotArmy.find((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
      setBotCollection(botCollection.filter((b) => b.id !== bot.id));
    }
  };

  // Function to release a bot
  const releaseBot = (bot) => {
    setBotCollection([...botCollection, bot]);
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  // Function to discharge a bot
  const dischargeBot = (bot) => {
    // Implement logic to delete bot from backend
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  // Function to sort bots
  const sortBy = (criteria) => {
    const sortedBots = [...botCollection].sort((a, b) => {
      return a[criteria] - b[criteria];
    });
    setBotCollection(sortedBots);
  };

  let content;
  if (currentPage === 'collection') {
    content = (
      <div>
        <SortBar sortBy={sortBy} />
        <BotCollection bots={botCollection} enlistBot={enlistBot} />
      </div>
    );
  } else if (currentPage === 'army') {
    content = <YourBotArmy army={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />;
  } else if (currentPage === 'botSpecs') {
    content = <BotSpecs bot={selectedBot} />; // Pass the selected bot to BotSpecs
  }

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('collection')}>Bot Collection</button>
        <button onClick={() => setCurrentPage('army')}>Your Bot Army</button>
      </nav>
      {content}
    </div>
  );
};

export default App;
