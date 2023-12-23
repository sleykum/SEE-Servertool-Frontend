import { createContext, ReactNode, useEffect, useState } from 'react'
import User from '../types/User';
import { dummyUsers } from '../exampledata/exampledata';
import axios, { AxiosInstance } from 'axios';

type Props = {
  children?: ReactNode;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 5000,
  withCredentials:true
});

interface IAuthContext {
  token: string;
  setToken: (newState: string) => void;
  user: User | null;
  setUser: (newState: User | null) => void;
  axiosInstance: AxiosInstance;
}

const initialValue = {
  token: sessionStorage.getItem('token') ?? "",
  setToken: () => {},
  user: null,
  setUser: () => {},
  axiosInstance: axiosInstance
}

const AuthContext = createContext<IAuthContext>(initialValue)

const AuthProvider = ({children}: Props) => {
  const [ token, setToken ] = useState<string>(initialValue.token);
  const [ user, setUser ] = useState<User |null>(initialValue.user);

  useEffect(() => {
    let isApiSubscribed = true;

    if(!user && isApiSubscribed && sessionStorage.getItem('username')){
      axiosInstance.get(`user/me`).then((response) => setUser(response.data));
    }
    return () => {
      isApiSubscribed = false;
    }
  }, [token, user])
  

  return (
    <AuthContext.Provider value={{token, setToken, user, setUser, axiosInstance}}>
      {children}
    </AuthContext.Provider>
  )
}

export {  AuthContext, AuthProvider }