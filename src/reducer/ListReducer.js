import {GET_LIST, UPDATE_LIST} from '../actions/type';

const INITIAL_STATE = {
  list: [
    {
      id: 0,
      title: 'Hello 1',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar hendrerit orci et accumsan. Morbi vel vulputate urna, et tempor nunc. Pellentesque hendrerit condimentum',
      importance: 0,
      date: '01/07/2020',
    },
    {
      id: 1,
      title: 'Hello 2',
      desc:
        'onec luctus sit amet est at porttitor. Donec non purus vel magna pellentesque porta nec id turpis. Sed pharetra justo turpis, eu finibus dolor ultrices a. Suspendisse potenti.',
      importance: 1,
      date: '01/03/2020',
    },
    {
      id: 2,
      title: 'Hello 3',
      desc:
        'Fusce pulvinar hendrerit orci et accumsan. Morbi vel vulputate urna, et tempor nunc. Pellentesque hendrerit condimentum tellus.',
      importance: 1,
      date: '01/07/2020',
    },
    {
      id: 3,
      title: 'Hello 4',
      desc:
        'Donec non purus vel magna pellentesque porta nec id turpis. Sed pharetra justo turpis, eu finibus dolor ultrices a. Suspendisse potenti.',
      importance: 2,
      date: '01/08/2020',
    },
  ],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_LIST:
      const obj = action.payload;

      return {
        ...state,
        list: [obj, ...state.list],
      };

    default:
      return state;
  }
};
