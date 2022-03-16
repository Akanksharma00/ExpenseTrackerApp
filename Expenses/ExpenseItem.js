import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const clickHandler= () => {
        console.log('clicked!!!');
    }

    const deleteClickHandler = () => {
        console.log('Deleted!!!');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails  title={props.title} amount={props.amount}></ExpenseDetails>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteClickHandler}>Delete</button>
        </Card>
    );
}

export default ExpenseItem; 