// import logo from "./logo.svg";
import { useState } from "react";
import "./App.scss";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesTotal from "./components/ExpenseTotal/ExpensesTotal";

function App() {
  const [items, setItems] = useState([]);

  const remove = (key) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== key);
    });
  };

  const onAddItemHandler = (item) => {
    setItems((prevState) => {
      return [item, ...prevState];
    });
    // TODO: why here gives previous state instead of current?!
    // console.log(items);
    // console.log(item);
  };
  return (
    <div className="app">
      <div className="tracker">
        <header>Expense tracker</header>
        <NewExpense onAddItem={onAddItemHandler} />
        <ExpensesTotal items={items} />
        <ExpensesList items={items} onRemove={remove} />
      </div>
    </div>
  );
}

export default App;
