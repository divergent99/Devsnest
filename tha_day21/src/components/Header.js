import React from 'react';

function Header({totalIncome}) {
  return (
    <header>
      <h1>Calorie Tracker</h1>
      <div className="total-income">{totalIncome} Cals</div>
    </header>
  );
}

export default Header;