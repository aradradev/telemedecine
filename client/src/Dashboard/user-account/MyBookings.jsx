import Error from '../../components/Error/Error'
import Loading from '../../components/Loader/Loading'
import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import { DoctorCard } from '../../components/Doctors/DoctorCard'

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/appointments/my-appointments`)
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {appointments.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h1 className='mt-5 text-center leading-7  text-[20px] font-semibold text-primaryColor'>
          You did not book any doctor yet
        </h1>
      )}
    </div>
  )
}
export default MyBookings
