import Error from '../../components/Error/Error'
import Loading from '../../components/Loader/Loading'
import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import DoctorCard from '../../components/Doctors/DoctorCard'

const MyBookings = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  const appointments = data?.appointments
  console.log('Fetched Appointments:', appointments)
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && appointments.length > 0 && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {appointments.map((appointment) => (
            <DoctorCard key={appointment.bookingId} doctor={appointment.doctor} />
          ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h1 className='mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor'>
          You did not book any doctor yet
        </h1>
      )}
    </div>
  )
}
export default MyBookings
