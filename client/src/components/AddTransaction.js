import React, {useState, useContext} from 'react'

import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState(''); //***
    const [amount, setAmount] = useState(0); //***
    const { addTransaction } = useContext(GlobalContext);  //** 

    const toAdd = e=> {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText ('');
        setAmount (0);
    }
    
    return (
        <div>
            <h3>Add New Transaction</h3>
        <form onSubmit={toAdd}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text"  value={text} onChange={(e) =>setText(e.target.value)}
                placeholder="Enter content.." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br/> (Positive: income; Negative: expense)
            </label>
            <input type="number"  value={amount} onChange={(e) =>setAmount(e.target.value)} 
            placeholder="Enter amount.."  /> 
            </div>
            <button className="btn">Add Transaction</button>
        </form>

        </div>
    )
}
