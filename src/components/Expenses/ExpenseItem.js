import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  const onLIClickHandler = () => {
    props.onRemoveOne(props.id);
  };
  return (
    <li className="expenses__item" onClick={onLIClickHandler}>
      <div className="expenses__item__description">{props.text}</div>
      <div className="expenses__item__amount">{props.amount} $</div>
    </li>
  );
};

export default ExpenseItem;
