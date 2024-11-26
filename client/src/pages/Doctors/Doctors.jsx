import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'

import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useEffect, useState } from 'react'

const Doctors = () => {
  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState('')

  // Function to handle Search
  const handleSearch = (e) => {
    setQuery(e.target.value)
    setDebounceQuery(e.target.value)
    console.log('handle search triggered:', query)
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        setDebounceQuery(query.trim())
      }
    }, 700)

    return () => clearTimeout(timeout)
  }, [query])

  // Construct query params
  // const queryParams = new URLSearchParams()
  // if (debounceQuery) {
  //   queryParams.set('name', debounceQuery)
  //   queryParams.set('specialization', debounceQuery)
  // }

  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors?name=${debounceQuery}`)

  // console.log('doctor find: ', data.doctors)

  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input
              type='search'
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search Doctor By Name...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {data?.doctors?.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What our patients say</h2>
            <p className='text__para text-center'>
              At WeCareHealth, we’re committed to delivering exceptional healthcare experiences. Our patients trust us
              for our expertise, compassion, and innovative approach to care. Hear from those who have experienced the
              difference firsthand.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  )
}
export default Doctors
