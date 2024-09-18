/* eslint-disable react/prop-types */
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role } = useAuth()
  const isAllowed = user && allowedRoles.includes(role)

  return isAllowed ? children : <Navigate to='/login' replace={true} />
}
export default ProtectedRoute
