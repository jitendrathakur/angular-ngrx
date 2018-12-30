import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {  
    
      return {
        state,
        users: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.AddUser: {
      let users = state.users;
      users.push(action.payload);
        return {
          ...state,
          users: users
        };
    }
    case EUserActions.GetFixedUser: {
      const newState = _.cloneDeep(state)
      newState.prop = action.payload
      return {
        ...state,
        users: action.payload
      };
    }
    default:
      return state;
  }
};
