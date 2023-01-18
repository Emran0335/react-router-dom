import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get("param") === "active";

  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ param: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>
      {showActiveUsers ? (
        <h1>Showing the active users</h1>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};

export default Users;
