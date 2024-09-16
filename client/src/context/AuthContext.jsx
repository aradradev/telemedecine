/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react'

const initialState = {
  user: null,
  role: null,
}

export const AuthContext = createContext(initialState)

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        role: null,
      }
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        role: action.payload.role,
      }
    case 'LOGOUT':
      return {
        user: null,
        role: null,
      }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{ user: state.user, role: state.role, dispatch }}>{children}</AuthContext.Provider>
  )
}
