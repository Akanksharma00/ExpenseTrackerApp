import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            key ={props.items.id}
            <ExpenseItem 
                // key={props.items.id}
                title={props.items.title}
                amount={props.items.amount} 
                date={props.items.date}
                // location={props.items.location}
            />
        </Card>
    );
    
}

export default Expenses;