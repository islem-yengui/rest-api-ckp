import axios from "axios";
import { GETUSERS } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users");
    console.log(res.data);
    dispatch({ type: GETUSERS, payload: res.data });
  } catch (error) {
    alert("get error !");
  }
};
