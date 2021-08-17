import {ActionGenerator} from './action';
import { User } from '../type-const';

export const fetchUser = (login:string) => (dispatch: any, _getState: any, api: any) => (
  api.get(login)
    .then((response: any) => dispatch(ActionGenerator.loadUser(response.data)))
);