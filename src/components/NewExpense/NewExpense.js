import { nanoid } from "nanoid";
import { useState } from "react";
import "./NewExpense.scss";

const NewExpense = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [newItem, setNewItem] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const onTextChangeHandler = (event) => {
    const item = event.target.value;
    setNewItem(item);
    setIsValid(true);
  };
  const onAmountChangeHandler = (event) => {
    const amount = +event.target.value;
    setNewAmount(amount);
    setIsValid(true);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (newItem === "" || newAmount === "") {
      setIsValid(false);
      return;
    }
    props.onAddItem({ id: nanoid(), text: newItem, amount: newAmount });
    setNewItem("");
    setNewAmount("");
  };
  return (
    <form
      className={`newExpense ${!isValid ? "invalid" : ""}`}
      onSubmit={onSubmitHandler}
    >
      <div className="newExpense__text">
        <label htmlFor="text">New expense:</label>
        <input
          id="text"
          type="text"
          value={newItem}
          onChange={onTextChangeHandler}
        />
      </div>
      <div className="newExpense__amount">
        <label htmlFor="amount">Cost:</label>
        <input
          id="amount"
          type="number"
          value={newAmount}
          onChange={onAmountChangeHandler}
        />
      </div>
      <button type="submit">ADD</button>
    </form>
  );
};

export default NewExpense;
