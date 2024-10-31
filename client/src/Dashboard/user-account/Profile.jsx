import signupImg from '../assets/images/signup.gif'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL } from '../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'


const Profile = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    role: 'patient',
    photo: selectedFile,
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0]
    const data = await uploadImageToCloudinary(file)
    // console.log(data)
    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const { message } = await res.json()
      if (!res.ok) {
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/login')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  return <div>
    <form onSubmit={submitHandler}>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='py-3 pr-4 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
                <input
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='py-3 pr-4 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='py-3 pr-4 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
              </div>
              <div className='mb-5 flex ic justify-between'>
                <label htmlFor='' className='text-headingColor text-[16px] leading-7 font-bold'>
                  Are you a:
                  <select
                    name='role'
                    value={formData.role}
                    onChange={handleInputChange}
                    className='text-textColor font-semibold text-[15px] leading-6 px-4 py-3 focus:outline-none '>
                    <option value='patient'>Patient</option>
                    <option value='doctor'>Doctor</option>
                  </select>
                </label>
                <label htmlFor='' className='text-headingColor text-[16px] leading-7 font-bold'>
                  Gender:
                  <select
                    name='gender'
                    value={formData.gender}
                    onChange={handleInputChange}
                    className='text-textColor font-semibold text-[15px] leading-6 px-4 py-3 focus:outline-none '>
                    <option value=''>Select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </label>
              </div>
              <div className='mb-5 flex items-center gap-3'>
                {selectedFile && (
                  <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                    <img src={previewURL} alt='avatar' className='rounded-full w-full' />
                  </figure>
                )}
                <div className='relative w-[130px] h-[50px]'>
                  <input
                    type='file'
                    name='photo'
                    id='customFile'
                    onChange={handleFileInputChange}
                    accept='jpeg, png, jpg'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label
                    htmlFor='customFile'
                    className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[16px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                    Upload Photo
                  </label>
                </div>
              </div>
              <div className='mt-5'>
                <button
                  disabled={loading && true}
                  className='bg-primaryColor text-white w-full py-3 px-4 text-[18px] rounded-lg leading-[30px]'
                  type='submit'>
                  {loading ? <HashLoader size={35} color='#ffffff' /> : 'Sign Up'}
                </button>
              </div>
              
            </form>
  </div>
}
export default Profile
