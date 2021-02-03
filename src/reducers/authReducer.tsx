import { removeLocalStorageValue, setLocalStorage } from "../common";
import { IAuthDTO } from "../types/IAuth";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export type AuthAction = {
  type: AuthActionTypes;
  payload: IAuthDTO;
};

export function authReducer(state: IAuthDTO, action: AuthAction): IAuthDTO {
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
