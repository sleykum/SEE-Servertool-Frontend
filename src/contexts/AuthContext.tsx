import { createContext, ReactNode, useState } from 'react'
import User from '../types/User';
import { dummyUsers } from '../exampledata/exampledata';

type Props = {
  children?: ReactNode;
}

interface IAuthContext {
  token: string;
  setToken: (newState: string) => void;
  user: User | null;
  setUser: (newState: User | null) => void;
}

function getUserFromToken(token: string | null){
  if(token == "admin" && dummyUsers[0]){
    return dummyUsers[0];
  }
  if(token == "benutzer1" && dummyUsers[1]){
    return dummyUsers[1];
  }
  if(token == "benutzer2" && dummyUsers[2]){  
    return dummyUsers[2];
  }
  return null;
}

const initialValue = {
  token: sessionStorage.getItem('token') ?? "",
  setToken: () => {},
  user: getUserFromToken(sessionStorage.getItem('token')),
  setUser: () => {}
}

const AuthContext = createContext<IAuthContext>(initialValue)

const AuthProvider = ({children}: Props) => {
  const [ token, setToken ] = useState<string>(initialValue.token)
  const [ user, setUser ] = useState<User |null>(initialValue.user)

  return (
    <AuthContext.Provider value={{token, setToken, user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export {  AuthContext, AuthProvider }