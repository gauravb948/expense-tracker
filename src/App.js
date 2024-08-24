import "./App.css";
import ExpenseTracker from "./conponents/ExpenseTracker";
import RecentTransactions from "./conponents/RecentTransactions";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-header">Expense Tracker</h1>
      </header>
      <ExpenseTracker />
      <div className="mid-section">
        <RecentTransactions />
      </div>
    </div>
  );
}

export default App;
