// @ts-nocheck
import _ from 'lodash';
import {
  CREATE_EVENT,
  DELETE_EVENT,
  READ_EVENT,
  READ_EVENTS,
  UPDATE_EVENT,
} from '../actions';

// @ts-ignore
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data);
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      // eslint-disable-next-line no-param-reassign
      delete events[action.id];
      return { ...events };
    case CREATE_EVENT:
    case READ_EVENT:
      // console.log(action.response.data);
      // eslint-disable-next-line no-param-reassign
      // delete events[action.id];
      // eslint-disable-next-line no-case-declarations
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case UPDATE_EVENT:
      // console.log(action.response.data);
      // eslint-disable-next-line no-param-reassign
      // delete events[action.id];
      // eslint-disable-next-line no-case-declarations
      const dataPut = action.response.data;
      return { ...events, [dataPut.id]: dataPut };
    default:
      return events;
  }
};
