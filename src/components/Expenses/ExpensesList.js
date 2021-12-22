import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className="expenses">
      {props.items.map((item) => (
        <ExpenseItem key={item.id} text={item.text} amount={item.amount} />
      ))}
    </ul>
  );
};

export default ExpensesList;
