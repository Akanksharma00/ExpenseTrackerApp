import React from 'react'
import Expenses from "./components/Expenses/Expenses";

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
      <h2>Let's get started!</h2>
      {/* {expenses.map(e => {
        return(
          <div>
            <p>{e.title}</p>
            <p>{e.amount}</p>
            <p>{e.date.toISOString()}</p>
          </div>
        )
      })} */}

      <Expenses 
        items = {expenses}
      />
    </div>
  );
}

export default App;
