import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const year = new Date().getFullYear();
  // console.log(year);
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value={year}>{year}</option>
          <option value={year-1}>{year-1}</option>
          <option value={year-2}>{year-2}</option>
          <option value={year-3}>{year-3}</option>
          <option value={year-4}>{year-4}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;