import "./ExpenseItem.scss";

const ExpenseItem = () => {
  return (
    <li className="expenses__item">
      <div className="expenses__item__description">new computer mouse</div>
      <div className="expenses__item__amount">50 $</div>
    </li>
  );
};

export default ExpenseItem;
