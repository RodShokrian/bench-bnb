import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         RECEIVE_LOGOUT_SUCCESS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_LOGOUT_SUCCESS:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};

export default SessionReducer;
