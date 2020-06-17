import * as types from './types';

const BASE_URL = 'https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34';

export const getData = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.log('error case');
        const showerror = await response.json();
        throw new Error(showerror.error);
      }

      const showData = await response.json();

      dispatch(setData(showData));
      return showData.data;
    } catch (err) {
      throw err;
    }
  };
};

const setData = data => {
  return {
    data: data,
    type: types.GET_COURSE_DATA,
  };
};
