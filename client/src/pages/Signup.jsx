import signupImg from '../assets/images/signup.gif'

const Signup = () => {
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
            <form>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value=''
                  className='py-3 pr-4 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
                <input
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value=''
                  className='py-3 pr-4 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value=''
                  className='py-3 pr-4 w-full border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
              </div>
              <div className='mb-5 flex ic justify-between'>
                <label htmlFor='' className='text-headingColor text-[16px] leading-7 font-bold'>
                  Are you a:
                  <select
                    name='role'
                    className='text-textColor font-semibold text-[15px] leading-6 px-4 py-3 focus:outline-none '>
                    <option value='patient'>Patient</option>
                    <option value='doctor'>Doctor</option>
                  </select>
                </label>
                <label htmlFor='' className='text-headingColor text-[16px] leading-7 font-bold'>
                  Gender:
                  <select
                    name='gender'
                    className='text-textColor font-semibold text-[15px] leading-6 px-4 py-3 focus:outline-none '>
                    <option value=''>Select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Signup
