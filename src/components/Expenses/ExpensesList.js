import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
  return (
    <ul className="expenses">
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </ul>
  );
};

export default ExpensesList;
