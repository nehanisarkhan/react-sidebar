import React, { useState } from 'react';
import './style.css';
import { data } from './Data.js';
import AccountMembers from './AccountMembers';
import JobSettings from './JobSettings';
import CompanySettings from './CompanySettings';

function Sidebar() {
  const [copied, setCopied] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  }

  const tabItems = [
    {
      label: 'Account Members',
      value: 0,
    },
    {
      label: 'Job Settings',
      value: 1,
    },
    {
      label: 'Company Settings',
      value: 2,
    },
    {
      label: 'Student Settings',
      value: 3,
    },
    {
      label: 'Event Settings',
      value: 4,
    },
    {
      label: 'Subscription & Payments',
      value: 5,
    },
    {
      label: 'Integrations',
      value: 6,
    },
  ];
  const onTabChange = (item) => {
    console.log('clicked');
    setSelectedTab(item);
  };
  const renderTemplateContainer = () => {
    switch (selectedTab) {
      case 0:
        return <AccountMembers />;

      case 1:
        return <JobSettings />;

      case 2:
        return <CompanySettings />;
      case 3:
        return <h1>Have fun </h1>;
    }
  };

  return (
    <>
      <div className="Sidebar">
        <ul className="sidebarList">
          {tabItems.map((item, key) => {
            return (
              <li
                key={item.value}
                className="row"
                // className={
                //   window.location.pathname == item.link ? 'active' : 'row'
                // }
                onClick={() => onTabChange(item.value)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
      {/* <button onClick={copy}>{!copied ? 'Copy link' : 'Copied!'}</button> */}
      <div>{renderTemplateContainer()}</div>
    </>
  );
}

export default Sidebar;
