import React, { useEffect, useState } from "react";

const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const FetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error)); // Optional: error handling
  };

  useEffect(() => {
    FetchData(); // This should be inside the component, not outside
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UsingFetch;
