import { removeLocalStorageValue, setLocalStorage } from "../ultilities";
import { IAuth } from "../types/IAuth";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export type AuthAction = {
  type: AuthActionTypes;
  payload: IAuth;
};

export function authReducer(state: IAuth, action: AuthAction): IAuth {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      setLocalStorage("auth", action.payload);
      return action.payload;
    }
    case AuthActionTypes.LOGOUT: {
      removeLocalStorageValue("auth");
      return action.payload;
    }
    default:
      return state;
  }
}
