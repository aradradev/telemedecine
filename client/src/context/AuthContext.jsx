/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config'
import { toast } from 'react-toastify'

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
  const navigate = useNavigate()

  const logout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include',
      })
      const { message } = res.json()
      dispatch({ type: 'LOGOUT' })
      toast.success(message)
      navigate('/login')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <AuthContext.Provider value={{ user: state.user, role: state.role, dispatch, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
