import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount > 0? '+':'-';
    let plusMinus = transaction.amount>0?'plus':'minus';

    return (
        <div>
            <li className={plusMinus}>
                      {transaction.text} 
                      <span> {sign}{numberWithCommas(Math.abs(transaction.amount))} </span> 
                      <button className="delete-btn"
                      onClick={() => deleteTransaction(transaction._id)}
                      >X</button> 
                  </li>
        </div>
    )
}
