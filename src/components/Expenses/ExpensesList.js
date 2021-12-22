import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const onRemoveItem = (key) => {
    props.onRemove(key);
  };
  return (
    <ul className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          text={item.text}
          amount={item.amount}
          onRemoveOne={onRemoveItem}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
