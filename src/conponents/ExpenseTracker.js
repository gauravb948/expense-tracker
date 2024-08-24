import "./ExpenseTracker.css";
import Graph from "./Graph";

function BalanceSection() {
  return (
    <div className="main">
      <div className="balanceSection">
        <div className="value">
          <span className="title">Wallet Balance: </span>
          <span className="amount walletAmount">₹5000</span>
        </div>
        <button className="btn incomeButton">+ Add Income</button>
      </div>
    </div>
  );
}
function ExpenseSection() {
  return (
    <div className="main">
      <div className="balanceSection">
        <div className="value">
          <span className="title">Expenses: </span>
          <span className="amount expenseAmount">₹500</span>
        </div>
        <button className="btn expenseButton">+ Add Expense</button>
      </div>
    </div>
  );
}

function ExpenseTracker() {
  return (
    <div className="section">
      <BalanceSection />
      <ExpenseSection />
      <Graph />
    </div>
  );
}

export default ExpenseTracker;
