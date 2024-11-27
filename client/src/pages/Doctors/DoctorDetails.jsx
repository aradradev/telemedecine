import { useState } from 'react'
import imgDoctor from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'

import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useParams } from 'react-router-dom'

const DoctorDetails = () => {
  const { id } = useParams()
  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`)
  // const {
  //   name,
  //   specialization,
  //   averageRating,
  //   totalRating,
  //   photo,
  //   totalPatients = 233,
  //   experiences,
  //   qualifications,
  //   timeSlots,
  //   reviews,
  //   bio,
  //   about,
  //   ticketPrice,
  // } = doctor
  console.log(doctor)
  const [tab, setTab] = useState('about')
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className='grid md:grid-cols-3 gap-[50px]'>
            <div className='md:col-span-2'>
              <div className='flex items-center gap-5'>
                <figure className='max-w-[200px] max-h-[200px]'>
                  <img src={doctor?.doctor?.photo} alt='imgDoctor' className='w-full rounded-lg' />
                </figure>
                <div>
                  <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                    {doctor?.doctor?.specialization}
                  </span>
                  <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>{doctor?.doctor?.name}</h3>
                  <div className='flex items-center gap-[6px]'>
                    <span className='flex items-center gap-[6px] text-[14px] text-headingColor leading-5 lg:text-[16px] lg:leading-7 font-semibold'>
                      <img src={starIcon} alt='starIcon' /> {doctor?.doctor?.reviews || '4.5'}
                    </span>
                    <span className='text-[14px] text-textColor leading-5 lg:text-[16px] lg:leading-7 font-[400]'>
                      (272)
                    </span>
                  </div>
                  <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                    {doctor?.doctor?.bio}
                  </p>
                </div>
              </div>

              <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                <button
                  onClick={() => setTab('about')}
                  className={`${
                    tab === 'about' &&
                    'border-b border-solid border-primaryColor transition-all ease-in-out duration-900'
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                  About
                </button>
                <button
                  onClick={() => setTab('feedback')}
                  className={`${
                    tab === 'feedback' &&
                    'border-b border-solid border-primaryColor transition-all ease-in-out duration-900'
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                  Feedback
                </button>
              </div>

              <div className='mt-12'>
                {tab === 'about' && (
                  <DoctorAbout
                    name={doctor?.doctor?.name}
                    about={doctor?.doctor?.about}
                    qualifications={doctor?.doctor?.qualifications}
                    experiences={doctor?.doctor?.experiences}
                  />
                )}
                {tab === 'feedback' && <Feedback />}
              </div>
            </div>
            <div>
              <SidePanel />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default DoctorDetails
