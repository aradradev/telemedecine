import { BiMenu } from 'react-icons/bi'
import { useAuth } from '../../context/AuthContext'

const Tabs = ({ tab, setTab }) => {
  const { logout } = useAuth()
  return (
    <div>
      <span className='lg:hidden'>
        <BiMenu className='w-6 h-6 cursor-pointer' />
      </span>
      <div className='hidden lg:flex flex-col bg-white p-[30px] shadow-panelShadow items-center h-max rounded-md'>
        <button
          onClick={() => setTab('overview')}
          className={`${
            tab === 'overview' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'
          } w-full btn m-0 rounded-md`}>
          Overview
        </button>
        <button
          onClick={() => setTab('appointments')}
          className={`${
            tab === 'appointments' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'
          } w-full btn m-0 rounded-md`}>
          Appointments
        </button>
        <button
          onClick={() => setTab('settings')}
          className={`${
            tab === 'settings' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'
          } w-full btn m-0 rounded-md`}>
          Profile
        </button>
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
    </div>
  )
}
export default Tabs
