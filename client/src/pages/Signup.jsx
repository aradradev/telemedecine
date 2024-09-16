import signupImg from '../assets/images/signup.gif'
import avatar from '../assets/images/doctor-img02.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import uploadImageToCloudinary from '../utils/uploadCloudinary'

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    role: 'patient',
    photo: selectedFile,
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0]
    const data = await uploadImageToCloudinary(file)
    console.log(data)
    // console.log(file)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <section className='px-5 lg:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/**Image box */}
          <div className='hidden lg:block bg:primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='signupImg' className='w-full rounded-l-lg' />
            </figure>
          </div>

          {/**Signup form */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-3'>
              Create an <span className='text-primaryColor'>account</span>
            </h3>
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
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={avatar} alt='avatar' className='rounded-full w-full' />
                </figure>
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
                  className='bg-primaryColor text-white w-full py-3 px-4 text-[18px] rounded-lg leading-[30px]'
                  type='submit'>
                  Sign Up
                </button>
              </div>
              <p className='mt-5 text-textColor text-center'>
                Already have an account?
                <Link to='/login' className='text-primaryColor font-medium ml-1'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Signup
