import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, {useState} from "react"

const NewExpense = (props) => {

  const [togglFormState, changeToggleFormState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    toggleFormHandler();

  };

  const toggleFormHandler = () => {
    changeToggleFormState( (prevState) => !prevState);
  };

  return <div className='new-expense'>
    {togglFormState === false ? 
      <button className="expandable" onClick={toggleFormHandler}>Add expense</button>
      :
      <div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleFormHandler}/>
        {/* <button onClick={toggleFormHandler}>Cancel</button> */}
      </div>
    }
    
  </div>
};

export default NewExpense;
