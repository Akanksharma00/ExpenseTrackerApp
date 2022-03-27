import React from 'react'
import './ExpensesList.css'
import Expenses from './Expenses'

const ExpensesList = (props) => {
    let expensesContent = <p>No expenses found</p>

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No expenses found!</h2>
    }
;
    return <ul className='expenses-list'>
        {props.items.map(e => {
        return <Expenses items={e} />
        })}
    </ul>
};

export default ExpensesList;