import React, { useState, useEffect } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation, useQuery } from "@apollo/client";

import { LOAD_USERS } from "../GraphQL/Queries";

function Form() {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [createdTime, setCreatedTime] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  const [users, setUsers] = useState([]);
  const { loading, data, refetch } = useQuery(LOAD_USERS);

  const addUser = () => {
    createUser({
      variables: {
        message: message,
        userName: userName,
        createdTime: createdTime,
      },
    });
    refetch();

    if (error) {
      console.log(error);
    }
  };


  return (
    <div className="form-group mt-3 mb-0">
      <textarea className="form-control" rows="3"
        placeholder="Type your message here..." onChange={(e) => {
          setMessage(e.target.value);
        }}></textarea>
      <button type="button" className="btn btn-info" onClick={addUser}>
        Send Message <i className="fa fa-send"></i>
      </button>
    </div>
  );
}

export default Form;
