import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: null,
  phone: null,
  shift: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.prop };
    default:
      return state;
  }
};
