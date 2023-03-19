import React, { useState } from 'react';
import swal from 'sweetalert2';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredCurrency, setEnteredCurrency] = useState('$');
  // console.log(enteredDate==='');

  const [formError, setFormError] = useState({
    title:"",
    name:"",
    amount:"",
    date:"",
});

//   const [formInput, setFormInput] = useState({
//     name:"",
//     email:"",
//     password:"",
//     confirmPassword:"",
// });
// const [formError, setFormError] = useState({
//     name:"",
//     email:"",
//     password:"",
//     confirmPassword:"",
// });
// const handleUserInput = (name, value) => {
//     setFormInput({
//         ...formInput,
//         [name]: value,
//     });

// };

// const validateFormInput = (event) => {
//     event.preventDefault();
//     let inputError = {
//         name: "",
//         email:"",
//         password:"",
//         confirmPassword:"",
//     };
//     // if(formInput.name !="" && formInput.email !=""&& formInput.password !="" && formInput.password === formInput.confirmPassword && formInput.password === regex.test(formInput.password) && formInput.email === /\S+@\S+\.\S+/.test(formInput.email) ){
//     //     swal.fire({  
//     //         title: "Good job!",  
//     //         text: "Registration Successful!!!",  
//     //         icon: "success",
//     //     });
//     // }
//     if(!formInput.name && !formInput.email && !formInput.password) {
//         setFormError({
//             ...inputError,
//             name:"Enter userName",
//             email:"Enter valid email address",
//             password:"Password should not be empty",
//         });
//         setTimeout(() => {
//             setFormError("");
//           }, 3000);
//         return
//     }
//     else if(!formInput.name){
//         setFormError({
//             ...inputError,
//             name:"Enter userName",
//         });
//         setTimeout(() => {
//             setFormError("");
//           }, 3000);
//         return
//     }
//     else if(!formInput.email){
//         setFormError({
//             ...inputError,
//             email:"Enter email address",
//         });
//         setTimeout(() => {
//             setFormError("");
//           }, 3000);
//         return
//     }
//     else if(!/\S+@\S+\.\S+/.test(formInput.email)){
//         setFormError({
//             ...inputError,
//             email:"Enter valid email address",
//         });
//         setTimeout(() => {
//             setFormError("");
//           }, 3000);
//         return
//     }
//     else if(formInput.confirmPassword !== formInput.password) {
//         setFormError({
//             ...inputError,
//             confirmPassword:"Password and confirm password should be same",
//         });
//         setTimeout(() => {
//             setFormError("");
//           }, 3000);
//         return;
//     }
//     else if(!formInput.password){
//         setFormError({
//             ...inputError,
//             password:"Password should not be empty",
//         });
//         setTimeout(() => {
//             setFormError("");
//           }, 3000);
//         return
//     }
//     else if(!regex.test(formInput.password)) {
//         setFormError({
//             ...inputError,
//             password:"Password must be at least 8 characters long and contain at least one letter and one digit",
//         });
//         setTimeout(() => {
//             setFormError("");
//           }, 3000);
//         return
//     }
//     else {
//         swal.fire({  
//             title: "Good job!",  
//             text: "Registration Successful!!!",  
//             icon: "success",
//         }).then(okay => {
//             window.location.href = "http://localhost:3000"
//         })
//     }
//     setFormError(inputError);









  






  // swal({
  //   title: "Are you sure?",
  //   text: "Once deleted, you will not be able to recover this imaginary file!",
  //   icon: "warning",
  //   buttons: true,
  //   dangerMode: true,
  // })
  // .then((willDelete) => {
  //   if (willDelete) {
  //     swal("Poof! Your imaginary file has been deleted!", {
  //       icon: "success",
  //     });
  //   } else {
  //     swal("Your imaginary file is safe!");
  //   }
  // });













  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  // const currencyChangeHandler = (event) => {
    
  //   const dropdownChangeHandler = (event) => {
  //     setEnteredCurrency(event.target.value);
  //   };
    
  // };

  const currencyChangeHandler = (event) => {
    setEnteredCurrency(event.target.value.toString());
  };


  





  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      name:enteredName,
      currency:enteredCurrency,
    };
    // console.log(expenseData.date);
    if(enteredTitle==='' && enteredAmount==='' && enteredName==='' && enteredDate==="") 
       {      
              setFormError({
                  
                  name:"Enter userName",
                  title:"Enter title",
                  amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredAmount==='' && enteredName==='' ) 
       {      
              setFormError({
                  
                  name:"Enter userName",
                  title:"Enter title",
                  amount:"Enter amount",
                 
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredAmount==='' && enteredDate==='' ) 
       {      
              setFormError({
                  
                  date:"enter date",
                  title:"Enter title",
                  amount:"Enter amount",
                 
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredAmount==='' ) 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  title:"Enter title",
                  amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredName==='') 
       {      
              setFormError({
                  
                  name:"Enter userName",
                  title:"Enter title",
                  // amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' && enteredDate==='') 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  title:"Enter title",
                  // amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredDate==='' && enteredAmount==='') 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  // title:"Enter title",
                  amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredName==='' && enteredDate==='') 
       {      
              setFormError({
                  
                  name:"Enter Name",
                  // title:"Enter title",
                  // amount:"Enter amount",
                 date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredAmount==='' && enteredName==='') 
       {      
              setFormError({
                  
                  name:"Enter Name",
                  // title:"Enter title",
                  amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredTitle==='' ) 
       {      
              setFormError({
                  
                  // name:"Enter userName",
                  title:"Enter title",
                  // amount:"Enter amount",
                //  date:"enter date",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredName===''){
                    setFormError({
                        
                        name:"Enter name",
                    });
                    setTimeout(() => {
                        setFormError("");
                      }, 3000);
                    return
                }
                
              
            if(enteredAmount===''){
              setFormError({
                  
                  amount:"Enter amount",
              });
              setTimeout(() => {
                  setFormError("");
                }, 3000);
              return
          }
          if(enteredDate===''){
            setFormError({
                
                date:"Enter date",
            });
            setTimeout(() => {
                setFormError("");
              }, 3000);
            return
        };
        swal.fire({  
                      title: "Good job!",  
                      text: "Registration Successful!!!",  
                      icon: "success",
                  }).then(okay => {
                      
                  })
  







    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredName('');
    setEnteredCurrency('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <p className='error'>{formError.title}</p>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <p className='error'>{formError.amount}</p>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2012-01-01'
            max={new Date().getFullYear().toString()+'-'+(new Date().getMonth()+1).toString().padStart(2,'0')+'-'+new Date().getDate().toString().padStart(2,'0')}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          <p className='error'>{formError.date}</p>
        </div>
        <div className='new-expense__control'>
          <label>Shop Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <p className='error'>{formError.name}</p>
        </div>



        {/* <div className='new-expense__control'>
          <label>Currency</label>
          <ExpenseCurrency
          
          value={enteredCurrency}
          onChangeCurrency={currencyChangeHandler}/> */}



          
        {/* <div className='new-expense__control'>
          <label>Currency</label>
          <ExpenseCurrency
          
          value={enteredCurrency}
        onChangeCurrency={currencyChangeHandler}/> */}


          
<div className='new-expense__control'>
          <label>Currency</label>
            
              <select  value={enteredCurrency} onChange={currencyChangeHandler}>
              <option value='$'>USD</option>
          <option value='₹'>INR</option>
          <option value='€'>EUR</option>
          <option value='£'>GBP</option>
           
          

             </select>
             </div>
          



          
        
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;