/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react'
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
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem('user')) || null,
    role: localStorage.getItem('role') || null,
  })
  const navigate = useNavigate()

  const getCurrentUser = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      if (!res.ok) {
        throw new Error('Failed to fetch current user')
      }
      const data = await res.json()
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('role', data.user.role)
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.user, role: data.user.role } })
    } catch (error) {
      console.log('Failed to fetch current user: ', error)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  const logout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include',
      })
      const { message } = res.json()
      // Clear user data from localStorage on logout
      localStorage.removeItem('user')
      localStorage.removeItem('role')

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
