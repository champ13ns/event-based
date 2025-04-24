import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:4001');

function AdminApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();

    socket.on('user-added', (user) => {
      setUsers((prev) => [...prev, user]);
    });

    socket.on('user-deleted', (deletedUser) => {
      setUsers((prev) => prev.filter(u => u.email !== deletedUser.email));
    });

    return () => {
      socket.off('user-added');
      socket.off('user-deleted');
    };
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:4001/users');
    setUsers(res.data);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Service - User List</h1>
      <ul>
        {users.map((user, i) => (
          <li key={i} className="border-b py-2">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminApp;