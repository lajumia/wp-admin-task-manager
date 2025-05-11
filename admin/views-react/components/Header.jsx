import React from 'react';

import { FaSearch, FaBell, FaCalendarAlt } from 'react-icons/fa';

const Header = () => {
  const hasNotification = true;

  const today = new Date();
  const date = today.toLocaleDateString('en-GB');
  const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="header">
      <h1 className="header-title">
        <span className="red-text">Task</span>Manager
      </h1>

      <div className="search-bar">
        <input type="text" placeholder="Search your task here..." />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className="header-icons">
        <div className="icon-wrapper">
          <button className="icon-button">
            <FaBell />
            {hasNotification && <span className="notification-badge" />}
          </button>
        </div>
        <button className="icon-button"><FaCalendarAlt /></button>
        <div className="header-date">
          <div className="day">{weekday}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
