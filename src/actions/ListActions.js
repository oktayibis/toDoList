import {UPDATE_LIST, ADD_LOCAL_LIST, SET_LIST} from './type';
import AsyncStorage from '@react-native-community/async-storage';

export const updateList = (payload) => {
  return (dispatch) => {
    dispatch({type: UPDATE_LIST, payload});
  };
};

export const getList = () => {
  return async (dispatch) => {
    let data = await AsyncStorage.getItem(ADD_LOCAL_LIST);
    if (data) {
      dispatch({type: SET_LIST, payload: JSON.parse(data)});
    }
  };
};
