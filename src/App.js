// import logo from "./logo.svg";
import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.scss";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesTotal from "./components/ExpenseTotal/ExpensesTotal";

function App() {
  const [items, setItems] = useState([
    { id: nanoid(), text: "a book", amount: 15 },
  ]);

  const onAddItemHandler = (item) => {
    setItems((prevState) => {
      return [item, ...prevState];
    });
    // TODO: why here gives previous state instead of current?!
    console.log(items);
    console.log(item);
  };
  return (
    <div className="app">
      <div className="tracker">
        <header>Expense tracker</header>
        <NewExpense onAddItem={onAddItemHandler} />
        <ExpensesTotal items={items} />
        <ExpensesList items={items} />
      </div>
    </div>
  );
}

export default App;
