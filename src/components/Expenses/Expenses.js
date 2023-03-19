import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseCurrencyfilter from './ExpenseCurrencyfilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // const [filteredCurrency, setFilteredCurrency] = useState('USD');

  // const filterCurrencyHandler = (selectedCurrency) => {
  //   setFilteredCurrency(selectedCurrency);
  // };

  // const filteredExpense = props.items.filter((expense) => {
  //   return expense.currency.toString() === filteredCurrency;
  // });

  // let expensesConten = <p>No expenses found.</p>;

  // if (filteredExpense.length > 0) {
  //   expensesConten = filteredExpense.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //       name={expense.name}
  //       currency={expense.currency}
  //     />
  //   ));
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
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
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <ExpenseCurrencyfilter
        selected={filteredCurrency}
        onChangeFilter={filterCurrencyHandler}
        /> */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;