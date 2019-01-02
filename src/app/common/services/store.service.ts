import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { ACTION_ADD_USER } from '../../common/store/actions/appActions';
import { AppState } from '../../common/store/reducers';
import { IUserState } from '../store/reducers/user.reducer';

@Injectable()
export class StoreService {

  constructor(private store: Store<any>,
    private state: State<AppState>) { }

  getUserState(): IUserState {
    return this.state.value.userServiceReducer;
  }

  addUser(user: any) {
    this.store.dispatch({
      type: ACTION_ADD_USER,
      payload: user
    });
  }

}
