import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"


function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <Link to={"/user/" + user.id}>Details...</Link> <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <div>loading !</div>
      )}
    </div>
  );
}

export default Users;
