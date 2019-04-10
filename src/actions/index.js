import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTR = '?token=token123';

// @ts-ignore
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTR}`);
  // console.log(response.data);
  dispatch({ type: READ_EVENTS, response });
};
