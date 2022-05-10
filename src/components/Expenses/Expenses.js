import React, { useState } from "react";
import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandeler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Cards className="expenses">
        <ExpenseFilter
          yearSelected={filteredYear}
          onChangeFilter={filterChangeHandeler}
        />
        {/*  conditional rendering  */}
        <ExpensesList items={filteredExpenses} />
      </Cards>
    </div>
  );
};

export default Expenses;
