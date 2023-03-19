import React from 'react';

import './Currencyfilter.css';

const Currencyfilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-currencyfilter'>
      <div className='expenses-currencyfilter__control'>
        <label>Filter by Currency</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='$'>USD</option>
          <option value='₹'>INR</option>
          <option value='€'>EUR</option>
          <option value='£'>GBP</option>
        </select>
      </div>
    </div>
  );
};

export default Currencyfilter;






// import React from 'react';

// import './ExpensesFilter.css';

// const ExpensesFilter = (props) => {
//   const dropdownChangeHandler = (event) => {
//     props.onChangeFilter(event.target.value);
//   };

//   return (
//     <div className='expenses-filter'>
//       <div className='expenses-filter__control'>
//         <label>Filter by year</label>
//         <select value={props.selected} onChange={dropdownChangeHandler}>
//         <option value='$'>USD</option>
//           <option value='₹'>INR</option>
//           <option value='€'>EUR</option>
//           <option value='£'>GBP</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ExpensesFilter;