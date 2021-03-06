import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);  //*

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item=>item>0).reduce((acc, item)=> (acc+item), 0).toFixed(2);
  const expense = ( amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*-1).toFixed(2);
 /* const incomes = amounts.filter(item=>item>0);
    const incomeTotal = incomes.length===0?0:incomes.reduce((acc, item) => (acc+item)).toFixed(2); 
  const expenses = amounts.filter(item=>item<0);
    let expenseTotal = expenses.length===0?0:expenses.reduce((acc, item) => (acc+item)*(-1));
        expenseTotal = expenses.length===0?0:Math.abs(expenseTotal).toFixed(2);*/ //?!
        

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income </h4>
                <p  className="money plus" > ${numberWithCommas(income)} </p>
              
            </div>

            <div>
                <h4>Expenses  </h4>
                <p  className="money minus"> ${numberWithCommas(expense)} </p>
              
            </div>

            
        </div>
    )
}
