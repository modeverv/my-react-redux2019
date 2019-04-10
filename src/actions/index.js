// @ts-nocheck
import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENTS';
export const READ_EVENT = 'READ_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTR = '?token=token123';

export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTR}`);
  dispatch({ type: READ_EVENTS, response });
};

// eslint-disable-next-line arrow-parens
export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTR}`, values);
  dispatch({ type: CREATE_EVENT, response });
};

// eslint-disable-next-line arrow-parens
export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTR}`);
  dispatch({ type: DELETE_EVENT, id });
};

// eslint-disable-next-line arrow-parens
export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTR}`);
  dispatch({ type: READ_EVENT, response });
};

// eslint-disable-next-line arrow-parens
export const putEvent = values => async dispatch => {
  const response = await axios.put(
    `${ROOT_URL}/events/${values.id}${QUERYSTR}`,
    values,
  );
  dispatch({ type: UPDATE_EVENT, response });
};
