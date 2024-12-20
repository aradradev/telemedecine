import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext.jsx'
import { BASE_URL } from '../config'
import HashLoader from 'react-spinners/HashLoader.js'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      })
      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.msg)
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.user,
          role: result.user.role,
        },
      })

      setLoading(false)
      toast.success(result.message)
      navigate('/home')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hello, <span className='text-primaryColor'>Welcome</span> Back 🎉
        </h3>
        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='py-3 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='py-3 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
            />
          </div>
          <div className='mt-5'>
            <button
              disabled={loading && true}
              className='bg-primaryColor text-white w-full py-3 px-4 text-[18px] rounded-lg leading-[30px]'
              type='submit'>
              {loading ? <HashLoader size={35} color='#ffffff' /> : 'Login'}
            </button>
          </div>
          <p className='mt-5 text-textColor text-center'>
            Don&apos;t have an account?
            <Link to='/register' className='text-primaryColor font-medium ml-1'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
export default Login
