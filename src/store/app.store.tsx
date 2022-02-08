import {createContext, Dispatch, useEffect, useReducer} from "react";
import {loadUsers} from "./user.actions";
import {appReducer} from "./app.reducer";
import {UserDto} from "../rest/user.dto";
import {TodoDto} from "../rest/todo.dto";

export interface IAppState {
  users: UserDto[];
  todos: TodoDto[]
}

export const initialState: IAppState = {
  users: [],
  todos: [],
};

export const AppStoreContext = createContext({
  dispatch: (() => {}) as Dispatch<any>,
  appState: initialState
});

interface IAppStoreProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export const AppStore = ({children}: IAppStoreProps) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    loadUsers()(dispatch)
  }, []);

  return (
    <AppStoreContext.Provider value={{appState, dispatch}}>
      {children}
    </AppStoreContext.Provider>
  )
}
