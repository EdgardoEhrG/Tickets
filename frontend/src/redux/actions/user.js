import { GET_USER, SET_ERROR, GET_USER_TICKETS, LOG_OUT } from "../types";
import { getUserData } from "../../services/user";

export const getUser = () => async (dispatch) => {
  try {
    const userData = await getUserData();
    const { user } = userData.data;
    dispatch({
      type: GET_USER,
      payload: user,
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};

export const getUserTickets = () => async (dispatch) => {
  try {
    const userData = await getUserData();
    const { tickets } = userData.data;
    dispatch({
      type: GET_USER_TICKETS,
      payload: tickets,
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
    payload: null,
  });
};
