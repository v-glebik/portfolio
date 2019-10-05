import {
  FETCH_SALONS_SUCCESS,
  FETCH_SALONS_WAITING,
  FETCH_SALONS_FAILURE,
  FETCH_SALON_SUCCESS,
  FETCH_SALON_WAITING,
  FETCH_SALON_FAILURE,
  ADD_SALON_SUCCESS,
  ADD_SALON_WAITING,
  ADD_SALON_FAILURE,
  CLEAR_ERRORS
} from '../constants/ActionTypes';
import { fetchSalons, fetchSalon, addSalon } from '../api';

export const fetchSalonsAction = (page, size) => async (dispatch) => {
  dispatch({ type: FETCH_SALONS_WAITING });
  try {
    const response = await fetchSalons(page, size);
    dispatch({
      type: FETCH_SALONS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALONS_FAILURE,
      payload: error.response.data
    });
  }
};

export const fetchSalonAction = id => async (dispatch) => {
  dispatch({ type: FETCH_SALON_WAITING });
  try {
    const response = await fetchSalon(id);
    dispatch({
      type: FETCH_SALON_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALON_FAILURE,
      payload: error.response.data
    });
  }
};

export const addSalonAction = values => async (dispatch) => {
  dispatch({ type: ADD_SALON_WAITING });
  try {
    const response = await addSalon(values);
    dispatch({
      type: ADD_SALON_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ADD_SALON_FAILURE,
      payload: error.response.data
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
