// SortBar.js
import React from 'react';

const SortBar = ({ sortBy }) => {
  return (
    <div>
      <h3>Sort By:</h3>
      <button onClick={() => sortBy('health')}>Health</button>
      <button onClick={() => sortBy('damage')}>Damage</button>
      <button onClick={() => sortBy('armor')}>Armor</button>
    </div>
  );
};

export default SortBar;
