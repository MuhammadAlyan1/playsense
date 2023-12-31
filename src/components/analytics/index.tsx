import React from 'react';
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <div className="analytics">
      <h1 className="analytics__heading">Analytics</h1>
      <button className="analytics__match-analytics-button">
        <Link to="/match-analytics" className="analytics__match-analytics-link">
          Enter Match analytics
        </Link>
      </button>
    </div>
  );
};

export default Analytics;
