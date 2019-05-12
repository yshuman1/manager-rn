import { EMPLOYEE_UPDATE } from './types';
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const emplyeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
};
