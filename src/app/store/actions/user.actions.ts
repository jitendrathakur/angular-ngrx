import { Action } from '@ngrx/store';

import { IUser } from '../../models/user.interface';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  AddUser = "Add_User",
  GetFixedUser = "[User] Get fixed user"

}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class AddUsers implements Action {
  public readonly type = EUserActions.AddUser;
  constructor(public payload: IUser) {}
}


export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class GetFixedUser implements Action {
  public readonly type = EUserActions.GetFixedUser;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess | AddUsers | GetFixedUser;
