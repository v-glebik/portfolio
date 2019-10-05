import {
  OPEN_DIALOG_ADD,
  OPEN_DIALOG_VIEW,
  OPEN_DIALOG_EDIT,
  CLOSE_DIALOG
} from '../constants/ActionTypes';

const initState = {
  dialog: ''
};

export default function (state = initState, action) {
  switch (action.type) {
    case OPEN_DIALOG_ADD:
      return Object.assign({}, state, { dialog: 'add' });
    case OPEN_DIALOG_VIEW:
      return Object.assign({}, state, { dialog: 'view' });
    case OPEN_DIALOG_EDIT:
      return Object.assign({}, state, { dialog: 'edit' });
    case CLOSE_DIALOG:
      return { initState };
    default:
      return state;
  }
}
