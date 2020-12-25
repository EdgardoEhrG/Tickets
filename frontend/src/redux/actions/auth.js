import { AUTHENTICATE_USER } from "../types";
import { signUpUser } from "../../services/auth";

export const createUser = (userData) => async (dispatch) => {
  try {
    const user = await signUpUser(userData);
    const { token } = user.data;
    dispatch({
      type: AUTHENTICATE_USER,
      payload: token,
    });
  } catch (error) {
    if (error.res) {
      console.log(error.res.data);
    }
  }
};
