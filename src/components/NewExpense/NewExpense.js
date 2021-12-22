import "./NewExpense.scss";

const NewExpense = () => {
  return (
    <form className="newExpense">
      <div className="newExpense__text">
        <label htmlFor="text">New expense:</label>
        <input id="text" type="text" />
      </div>
      <div className="newExpense__amount">
        <label htmlFor="amount">Cost:</label>
        <input id="amount" type="number" />
      </div>
      <button type="submit">ADD</button>
    </form>
  );
};

export default NewExpense;
