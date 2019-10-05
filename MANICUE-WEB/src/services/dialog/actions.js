import {
  OPEN_DIALOG_ADD,
  OPEN_DIALOG_VIEW,
  OPEN_DIALOG_EDIT,
  CLOSE_DIALOG
} from '../constants/ActionTypes';

export const openDialogAddAction = () => (dispatch) => {
  dispatch({ type: OPEN_DIALOG_ADD });
};

export const openDialogViewAction = () => (dispatch) => {
  dispatch({ type: OPEN_DIALOG_VIEW });
};

export const openDialogEditAction = () => (dispatch) => {
  dispatch({ type: OPEN_DIALOG_EDIT });
};

export const closeDialogAction = () => (dispatch) => {
  dispatch({ type: CLOSE_DIALOG });
};
