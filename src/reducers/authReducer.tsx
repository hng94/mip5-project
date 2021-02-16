import { removeLocalStorageValue, setLocalStorage } from "../common";
import { AuthDTO } from "../DTO/AuthDTO";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export type AuthAction = {
  type: AuthActionTypes;
  payload: AuthDTO;
};

export function authReducer(state: AuthDTO, action: AuthAction): AuthDTO {
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
