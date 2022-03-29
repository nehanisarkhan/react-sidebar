import React from 'react';
import './style.css';
import { data } from './Data.js';
import React, { useState } from 'react';
function Sidebar() {
  const [copied, setCopied] = useState(false);
  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  }
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
      <button onClick={copy}>{!copied ? 'Copy link' : 'Copied!'}</button>
    </div>
  );
}

export default Sidebar;
