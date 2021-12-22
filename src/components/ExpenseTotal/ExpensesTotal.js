import "./ExpensesTotal.scss";

const ExpensesTotal = (props) => {
  const totalsArray = props.items.map((item) => item.amount);
  const total = totalsArray.reduce((acc, item) => acc + item, 0);
  return (
    <div className="expensesTotal">
      <p className="expensesTotal__text">Total:</p>
      <p className="expensesTotal__amount">{total} $</p>
    </div>
  );
};

export default ExpensesTotal;
