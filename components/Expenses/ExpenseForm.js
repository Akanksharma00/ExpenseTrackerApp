import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return(
        <form method="POST" >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' placeholder='Title' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' placeholder='Amount' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-01-01'/>
                </div>
            </div>
            <div className='new-expense__action'>
                <button type='submit' className='new-expense__actions'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;