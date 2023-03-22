import React, { useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter2 from './ExpensesFilter2';
import './Expenses.css';
import CurrencyFilter from './CurrencyFilter';
import CurrencyFilter2 from './CurrencyFilter2';



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredCurrency, setFilteredCurrency] = useState('USD');
  

  const filterCurrencyHandler = (selectedCurrency) => {
    setFilteredCurrency(selectedCurrency.toString());
   
    
  };



  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    
    if(filteredYear==='')
    {
      return ((expense.date.getFullYear().toString())  ); 
    }
    else{
    return ((expense.date.getFullYear().toString() === filteredYear)  );
    }
  });
  
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    
    expensesContent = filteredExpenses.map((expense) => (
      
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        name={expense.name}
        currency={expense.currency}
       kate={filteredCurrency}
       
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter2
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <CurrencyFilter
          selected={filteredCurrency}
          onChangeFilter={filterCurrencyHandler}
          
          />
        {expensesContent}
        {/* <CurrencyFilter
        // selected={filteredCurrency}
        // onChangeFilter={filterCurrencyHandler}
        /> */}
        
       
      
      </Card>
    </div>
  );
};
export default Expenses;