import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <li className="expenses__item">
      <div className="expenses__item__description">{props.text}</div>
      <div className="expenses__item__amount">{props.amount} $</div>
    </li>
  );
};

export default ExpenseItem;
