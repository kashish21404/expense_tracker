import React from 'react';
import CARD_1 from "../../assets/images/card1.jpg";
import { LuTrendingUpDown } from "react-icons/lu";
import './AuthLayout.css'; 

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-content">
        <h2 className="app-title">Expense Tracker</h2>
        {children}
      </div>

      <div className="auth-side">
        <div className="circle purple-circle"></div>
        <div className="circle border-circle"></div>
        <div className="circle violet-circle"></div>

        <div className="stats-card-container">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your income and expenses"
            value="430,000"
          />
        </div>

        <img src={CARD_1} alt="Illustration" className="side-image" />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value }) => {
  return (
    <div className="stats-card">
      <div className="stats-icon">
        {icon}
      </div>
      <div>
        <h6 className="stats-label">{label}</h6>
        <span className="stats-value">${value}</span>
      </div>
    </div>
  );
};
