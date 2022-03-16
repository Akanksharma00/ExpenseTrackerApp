import React from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/Expenses/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 98.67,
      date: new Date(2021,2,8),
      location: 'Supermarket'
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021,9,12),
      location: 'mall'
    },
    {
      id:'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021,2,28),
      location: 'Insurance office'
    },
    {
      id:'e4',
      title: 'New Desk(wooden)',
      amount: 450,
      date: new Date(2021, 5,12),
      location: 'furniture house'
    }
  ];

  
  return (
    <div>
      <NewExpense />
      {expenses.map(e => {
        return(
          <Expenses items={e} />
        )
      })}
    </div>
  );
}

export default App;
