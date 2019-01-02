import { ActionReducerMap } from '@ngrx/store';
import { IUserState, userServiceReducer } from './user.reducer';


export interface AppState {
  userServiceReducer: IUserState;
}

export const reducers: ActionReducerMap<AppState> = {
   userServiceReducer: userServiceReducer,
};
