import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Effect() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  // Fetch user by ID
  const fetchUserById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      const user = response.data;
      setSelectedUser(user);
      setName(user.name);
      setEmail(user.email);
      setAge(user.age);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Add a new user
  const addUser = async () => {
    await axios.post('http://localhost:5000/users', { name, email, age });
    fetchUsers();
    setName('');
    setEmail('');
    setAge('');
  };

  // Update a user
  const updateUser = async () => {
    await axios.put(`http://localhost:5000/users/${selectedUser.id}`, { name, email, age });
    fetchUsers();
    setSelectedUser(null);
    setName('');
    setEmail('');
    setAge('');
  };

  // Delete a user
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchUsers();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>CRUD with MySQL, Node.js, Express, and React</h1>
      
      {/* Input form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '400px' }}>
        <input
          style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', outline: 'none' }}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', outline: 'none' }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', outline: 'none' }}
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button
          style={{
            backgroundColor: selectedUser ? '#facc15' : '#3b82f6',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none'
          }}
          onClick={selectedUser ? updateUser : addUser}
        >
          {selectedUser ? 'Update' : 'Add'} User
        </button>
      </div>

      {/* User table */}
      <table style={{ width: '100%', maxWidth: '600px', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f3f4f6', color: '#333' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f3f4f6', color: '#333' }}>Email</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f3f4f6', color: '#333' }}>Age</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f3f4f6', color: '#333' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid #ccc', padding: '10px', color: '#333' }}>{user.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', color: '#333' }}>{user.email}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', color: '#333' }}>{user.age}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <button
                  style={{
                    padding: '5px 10px',
                    fontSize: '14px',
                    color: '#fff',
                    backgroundColor: '#facc15',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '5px'
                  }}
                  onClick={() => fetchUserById(user.id)}
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: '5px 10px',
                    fontSize: '14px',
                    color: '#fff',
                    backgroundColor: '#ef4444',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Effect;
