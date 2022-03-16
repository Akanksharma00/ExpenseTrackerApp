import React,{useState} from 'react'
import './ExpenseItem.css'

const ExpenseDetails = (props) => {
    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    
    const clickHandler= () => {
        setTitle('Updated!');
        console.log(title);
    }

    const deleteClickHandler = () => {
        console.log('Deleted!!!');
    }

    const changeExpenseClickHandler = () => {
        setAmount('$100');
    }

    return(
        <div className="expense-item__description">
            <h2>{title}</h2>
            <p>{props.location}</p>
            <div className="expense-item__price">
                {amount}
            </div>
            <button onClick={clickHandler}>Change Title</button>
            {/* <button onClick={deleteClickHandler}>Delete</button> */}
            <button onClick={changeExpenseClickHandler}>Change Expense</button>
        </div>
    );
}

export default ExpenseDetails;