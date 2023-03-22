import React, { useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import TotAmo from './TotAmo';
const rates={
  USD: 1,
  EUR: 4,
  INR: 2,
  GBP: 5,
};
const symb={
  USD: '$',
  EUR: '€',
  INR: '₹',
  GBP: '£',
}
const ExpenseItem = (props) => {
  
  
  let k=props.amount;
  if(!(props.kate===props.currency))
  {
   k=props.amount*rates[props.currency];
  }
  

  
  <TotAmo
  amount={k}/>
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} currency={props.currency}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__name'>{props.name}</div>
        <div className='expense-item__price'>{symb[props.kate]}{k}</div>
      </div>
    </Card>

  );
}

export default ExpenseItem;