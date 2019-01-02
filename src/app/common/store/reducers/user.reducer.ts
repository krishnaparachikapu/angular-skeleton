import {
  ACTION_ADD_USER
} from '../actions/appActions';



export interface IUserState {
  name: string;
  email: string;
  valid: boolean;

}

const initialState: IUserState = {
  name: '' ,
  email: '' ,
  valid: false,
};

export function userServiceReducer(state = initialState, action): IUserState {
   switch (action.type) {
    case ACTION_ADD_USER:
      return {
        ...state,
      };
  }
  return state;
}
