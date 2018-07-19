import { createActions } from 'redux-actions';

export const {
  getUserInfoReguest,
  getUserInfoSucess,
  getUserInfoFailure
} = createActions(
  'GET_USER_INFO_REQUEST',
  'GET_USER_INFO_SUCESS',
  'GET_USER_INFO_FAILURE'
);
