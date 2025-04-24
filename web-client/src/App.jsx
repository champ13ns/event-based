import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import UserApp from './UserApp';
import AdminApp from './AdminApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <div className="p-4 flex gap-4 justify-center">
        <Link to="/user" className="text-blue-600">User Panel</Link>
        <Link to="/admin" className="text-green-600">Admin Panel</Link>
      </div>
      <Routes>
        <Route path="/user" element={<UserApp />} />
        <Route path="/admin" element={<AdminApp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);