import userImg from '../../assets/images/avatar-icon.png'
import { useState } from 'react'
import MyBookings from './MyBookings'
import Profile from './Profile'
import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useAuth } from '../../context/AuthContext'

const MyAccount = () => {
  const [tab, setTab] = useState('bookings')
  const { logout } = useAuth()
  const { data: user, loading, error } = useFetchData(`${BASE_URL}/users/profile/me`)
  // console.log(`userFetchData: ${JSON.stringify(user)}`)
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className='grid md:grid-cols-3 gap-10'>
            <div className='pb-[50px] px-[30px] rounded-md'>
              <div className='flex items-center justify-center'>
                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor`'>
                  <img src={user?.user?.photo || userImg} alt='avatar' className='w-full h-full rounded-full' />
                </figure>
              </div>

              <div className='text-center mt-4'>
                <h2 className='text-2xl font-bold text-headingColor'>{user?.user?.name}</h2>
                <p className='text-textColor text-[15px] leading-6 font-medium'>
                  {user?.user?.email || 'example@mail.com'}
                </p>
                <p className='text-textColor text-[15px] leading-6 font-medium'>
                  Blood Type:
                  <span className='ml-2 text-headingColor text-[22px] leading-8'>{user?.user?.bloodType || 'o-'}</span>
                </p>
              </div>

              <div className='mt-[50px] md:mt-[100px]'>
                <p className='text-center text-textColor text-[15px] leading-6 font-medium mb-3'>
                  Don&apos;t Like Our Services?
                </p>
                <button
                  onClick={logout}
                  className='w-full bg-[#181a1e] hover:bg-black leading-7 mb-4 text-white font-bold p-3 rounded-md'>
                  Logout
                </button>
                <button className='w-full bg-red-500 hover:bg-red-700 leading-7 text-white font-bold p-3 rounded-md'>
                  Delete account
                </button>
              </div>
            </div>

            <div className='md:col-span-2 md:px-[30px]'>
              <div>
                <button
                  onClick={() => setTab('bookings')}
                  className={`${
                    tab === 'bookings' && 'bg-primaryColor text-white font-normal'
                  } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
                  My Bookings
                </button>
                <button
                  onClick={() => setTab('settings')}
                  className={`${
                    tab === 'settings' && 'bg-primaryColor text-white font-normal'
                  } p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
                  Profile Settings
                </button>
              </div>

              {tab === 'bookings' && <MyBookings />}
              {tab === 'settings' && <Profile userData={user} />}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default MyAccount
