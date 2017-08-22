import { FETCH_CITY} from '../actions/index';

export default function(state = [], action) {
  switch (action.type){
    case FETCH_CITY:
      return [ action.payload.data, ...state];
  }
  return state;
}