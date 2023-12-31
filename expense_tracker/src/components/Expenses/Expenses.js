import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const expenses = props.data;

  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = expenses.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };


  return(
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  </div>
  )
}




export default Expenses;
