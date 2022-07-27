import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading..</h2>
      ) : (
        users.map((el) => (
          <div>
            <h2> {el.fullName}</h2>
            <p>{el.email}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default UserList;
