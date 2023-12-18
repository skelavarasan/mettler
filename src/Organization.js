import React from 'react';
import Sidebar from './sidebar';
import './Organization.css';

function Organization() {
  return (
    <div className="organization-container">
      <Sidebar />
      <div className="organization-content">
        <h1>This is the Organization Page</h1>
      </div>
    </div>
  );
}

export default Organization;
