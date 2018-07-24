import { createActions } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-actions';

export const {
  user: { getUserInfoRequest, getUserInfoSucess, getUserInfoFailure }
} = createActions({
  USER: {
    GET_USER_INFO_REQUEST: null,
    GET_USER_INFO_SUCESS: null,
    GET_USER_INFO_FAILURE: null
  }
});
