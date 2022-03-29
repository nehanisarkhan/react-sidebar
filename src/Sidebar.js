import React from 'react';
import './style.css';
import { data } from './Data.js';
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="sidebarList">
        {data.map((item, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == item.link ? 'active' : ''}
              onClick={() => (window.location.pathname = item.link)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
