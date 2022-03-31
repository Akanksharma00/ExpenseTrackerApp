import React,{useState} from 'react'
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import ExpensesChart from './components/Expenses/ExpensesChart';
import ExpensesList from './components/Expenses/ExpensesList';
import NewExpense from './components/Expenses/NewExpense';

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState('2020');

  const addExpenseHandler = (expense) => {
      console.log(expense);
      setExpenses((prevExpenses) => {
        return [ expense, ...prevExpenses];
      });
      // setExpenses([expense, ...expenses]);
  };
  
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(e => {
    return e.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <div>
      {/* {console.log(expenses)} */}
      
      <NewExpense selectedValue={filteredYear} onAddExpense = {addExpenseHandler}/>
      
      <ExpenseFilter onFilterChangeHandler={filterChangeHandler}/>
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map(e => {
          return(
            <Expenses items={e}/>
          )
      }))} */}
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>      
    </div>
  );
}

export default App;
