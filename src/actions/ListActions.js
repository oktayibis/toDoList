import {UPDATE_LIST} from './type';

export const updateList = (payload) => {
  return (dispatch) => {
    dispatch({type: UPDATE_LIST, payload});
  };
};
