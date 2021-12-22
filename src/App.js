import logo from "./logo.svg";
import "./App.scss";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesTotal from "./components/ExpenseTotal/ExpensesTotal";

function App() {
  return (
    <div className="app">
      <div className="tracker">
        <header>Expense tracker</header>
        <NewExpense />
        <ExpensesTotal />
        <ExpensesList />
      </div>
    </div>
  );
}

export default App;
