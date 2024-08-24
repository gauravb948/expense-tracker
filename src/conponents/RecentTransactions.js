import "./RecentTransactions.css";
import Pizza_light from "./Pizza_light.png";

function RecentTransactions() {
  return (
    <div className="recentTransactions">
      <h1>Recent Transactions</h1>
      <div className="transactions-container">
        <div className="row">
          <div className="name-date-icon">
            <div className="icon">
              <img className="img" src={Pizza_light} alt="pizza" />
            </div>
            <div className="name-date">
              <p style={{ color: "#000" }}>Sammosa</p>
              <p>2022-01-01</p>
            </div>
          </div>
          <div className="edit-delete"></div>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
