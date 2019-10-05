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
  LOGOUT,
  CLEAR_ERRORS
} from '../constants/ActionTypes';

const initState = {
  salons: [],
  waiting: false,
  sizeOfSalons: 0,
  nextPageSalons: null,
  error: {}
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_SALONS_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        salons: action.payload.salons,
        sizeOfSalons: action.payload.count,
        nextPageSalons: action.payload.pagin.next
      });
    case FETCH_SALON_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        salon: action.payload
      });
    case ADD_SALON_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        error: {}
      });
    case ADD_SALON_WAITING:
    case FETCH_SALON_WAITING:
    case FETCH_SALONS_WAITING:
      return Object.assign({}, state, { waiting: true });
    case ADD_SALON_FAILURE:
    case FETCH_SALON_FAILURE:
    case FETCH_SALONS_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        waiting: false
      });
    case LOGOUT:
      return { initState };
    case CLEAR_ERRORS:
      return { ...state, error: {} };
    default:
      return state;
  }
}
