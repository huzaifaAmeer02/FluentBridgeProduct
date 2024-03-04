// WinningPanel.js

import React from "react";

const WinningPanel = ({ earned }) => {
  return (
    <div className="winning-panel">
      <h1 className="endText">Congratulations! You earned:</h1>
      <div className="big-amount">{earned}</div>
      {/* You can add additional content or styling as needed */}
    </div>
  );
};

export default WinningPanel;
