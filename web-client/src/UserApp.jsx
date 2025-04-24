import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserApp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:4000/users');
    setUsers(res.data);
  };

  const addUser = async () => {
    const newUser = { name, email };
    await axios.post('http://localhost:4000/users', newUser);
    setName('');
    setEmail('');
    fetchUsers();
  };

  const deleteUser = async (index) => {
    await axios.delete(`http://localhost:4000/users/${index}`);
    fetchUsers();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Service</h1>
      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Add User
      </button>

      <ul className="mt-4">
        {users.map((user, i) => (
          <li key={i} className="flex justify-between items-center p-2 border-b">
            <span>{user.name} ({user.email})</span>
            <button
              className="text-red-500"
              onClick={() => deleteUser(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserApp;
