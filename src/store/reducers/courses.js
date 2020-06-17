import * as types from '../actions/types';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COURSE_DATA: {
      console.log('hello from reducer', action);
      return {
        ...state,
        CourseData: action.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
