import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data, refetch } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  console.log('test', users);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);


  return (
    <ul className="chat-box chatContainerScroll">
      {users.map((val) => {
        return (
          <li className="chat-right">
            <div className="chat-hour">{val.createdTime} <span className="fa fa-check-circle"></span> <span className="chat-message">Sent</span></div>
            <div className="chat-text">{val.message}
            </div>
            <div className="chat-avatar">
              <div className="chat-name">{val.userName}</div>
            </div>
          </li>)
      })}
    </ul>
  );
}

export default GetUsers;
