import {ActionType} from './action';
import { User, Repository } from '../type-const';

const initialState = {
  users:[] ,
  repos: []  
};

function reducer (state = initialState, action: {type: string; payload: User[] | Repository[]}) {
  switch (action.type) {
    case ActionType.LOAD_USER:
      return {
        ...state,
        users: action.payload,
      };
    case ActionType.LOAD_CURRENT_USER_REPO:
      return {
        ...state,
        repos: action.payload,
      };    
    default:
      return state;
  }
}

export {reducer};