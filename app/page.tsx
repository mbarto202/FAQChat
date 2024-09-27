"use client";

import { useState, useEffect } from "react";

// Defining type for user
type User = {
  user_id: number;
  user_email: string;
  long_string_faq_data: string;
};

export default function Home() {
  
  // Array of users, initially empty
  const [users, setUsers] = useState<User[]>([]);
  // Tracks loading status
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.user_id}>{user.user_email}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
