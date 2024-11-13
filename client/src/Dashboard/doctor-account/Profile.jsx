/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../config'

const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: '',
    photo: null,
  })

  useEffect(() => {
    if (doctorData?.doctor) {
      setFormData({
        ...formData,
        name: doctorData.doctor.name || '',
        email: doctorData.doctor.email || '',
        phone: doctorData.doctor.phone || '',
        bio: doctorData.doctor.bio || '',
        specialization: doctorData.doctor.specialization || '',
        ticketPrice: doctorData.doctor.ticketPrice || 0,
        qualifications: doctorData.doctor.qualifications || [],
        experiences: doctorData.doctor.experiences || [],
        about: doctorData.doctor.about || '',
        photo: doctorData.doctor.photo || null,
      })
    }
  }, [doctorData])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]
    const data = await uploadImageToCloudinary(file)
    // console.log(data)
    setFormData({ ...formData, photo: data?.url })
  }

  const updateProfileHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData.doctor._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      })

      const result = await res.json()
      console.log('Profile result: ', result)
      if (!res.ok) {
        throw new Error(result.message)
      }
      toast.success(result.message)
    } catch (err) {
      toast.error(err.message)
    }
  }

  // reusable function for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }))
  }

  // reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]]
      updateItems[index][name] = value

      return { ...prevFormData, [key]: updateItems }
    })
  }

  // resusable delete function item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({ ...prevFormData, [key]: prevFormData[key].filter((_, i) => i !== index) }))
  }

  // Qualifications
  const addQualification = (e) => {
    e.preventDefault()

    addItem('qualifications', {
      startingDate: '',
      endingDate: '',
      degree: '',
      university: '',
    })
  }

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc('qualifications', index, event)
  }

  const deleteQualification = (e, index) => {
    e.preventDefault()
    deleteItem('qualifications', index)
  }

  // Experiences
  const addExperience = (e) => {
    e.preventDefault()

    addItem('experiences', { startingDate: '', endingDate: '', position: '', hospital: '' })
  }

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc('experiences', index, event)
  }

  const deleteExperience = (e, index) => {
    e.preventDefault()
    deleteItem('experiences', index)
  }
  // TimeSlot
  const addTimeSlot = (e) => {
    e.preventDefault()

    addItem('timeSlots', { day: 'Monday', startingTime: '12:00', endingTime: '4:30' })
  }

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc('timeSlots', index, event)
  }

  const deleteTimeSlot = (e, index) => {
    e.preventDefault()
    deleteItem('timeSlots', index)
  }

  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>
      <form>
        <div className='mb-5'>
          <p className='form__label'>Name*</p>
          <input
            type='text'
            name='name'
            value={formData.name}
            placeholder='Full Name'
            className='form__input'
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-5'>
          <p className='form__label'>Email*</p>
          <input
            type='email'
            name='email'
            value={formData.email}
            placeholder='Enter Email'
            className='form__input'
            onChange={handleInputChange}
            readOnly
            aria-readonly
            disabled='true'
          />
        </div>
        <div className='mb-5'>
          <p className='form__label'>Phone*</p>
          <input
            type='number'
            name='phone'
            value={formData.phone}
            placeholder='Phone Number'
            className='form__input'
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-5'>
          <p className='form__label'>Bio*</p>
          <input
            type='text'
            name='bio'
            value={formData.bio}
            placeholder='Bio'
            className='form__input'
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-5'>
          <div className='grid grid-cols-3 gap-5 mb-[30px]'>
            <div>
              <p className='form__label'>Gender*</p>
              <select name='gender' value={formData.gender} className='form__input py-3.5' onChange={handleInputChange}>
                <option value=''>Select</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </div>
            <div>
              <p className='form__label'>Specialization*</p>
              <select
                name='specialization'
                value={formData.specialization}
                className='form__input py-3.5'
                onChange={handleInputChange}>
                <option value=''>Select</option>
                <option value='surgeon'>Surgeon</option>
                <option value='neurologist'>Neurologist</option>
                <option value='dermatologist'>Dermatologist</option>
              </select>
            </div>
            <div>
              <p className='form__label'>Ticket Price*</p>
              <input
                type='number'
                placeholder='100k'
                name='ticketPrice'
                value={formData.ticketPrice}
                className='form__input'
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='form__label'>Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input
                      type='date'
                      name='startingDate'
                      value={item.startingDate}
                      className='form__input'
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input
                      type='date'
                      name='endingDate'
                      value={item.endingDate}
                      className='form__input'
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Degree*</p>
                    <input
                      type='text'
                      name='degree'
                      value={item.degree}
                      placeholder='Enter Degree'
                      className='form__input'
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>University*</p>
                    <input
                      type='text'
                      name='university'
                      value={item.university}
                      placeholder='Your college'
                      className='form__input'
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className='bg-red-600 p-2 rounded-full text-[18px] text-white mt-2 mb-[30px]'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addQualification} className='bg-[#3f3939] py-2 px-5 rounded text-white h-fit'>
            Add Qualification
          </button>
        </div>
        <div className='mb-5'>
          <p className='form__label'>Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input
                      type='date'
                      name='startingDate'
                      value={item.startingDate}
                      className='form__input'
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input
                      type='date'
                      name='endingDate'
                      value={item.endingDate}
                      className='form__input'
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Position*</p>
                    <input
                      type='text'
                      name='position'
                      value={item.position}
                      placeholder='Enter Position'
                      className='form__input'
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Hospital*</p>
                    <input
                      type='text'
                      name='hospital'
                      value={item.hospital}
                      placeholder='Hospital Name'
                      className='form__input'
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className='bg-red-600 p-2 rounded-full text-[18px] text-white mt-2 mb-[30px]'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className='bg-[#3f3939] py-2 px-5 rounded text-white h-fit'>
            Add Experiences
          </button>
        </div>
        <div className='mb-5'>
          <p className='form__label'>Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                  <div>
                    <p className='form__label'>Day*</p>
                    <select
                      name='day'
                      value={item.day}
                      className='form__input py-3.5'
                      onChange={(e) => handleTimeSlotChange(e, index)}>
                      <option value=''>Select Day</option>
                      <option value='sunday'>Sunday</option>
                      <option value='monday'>Monday</option>
                      <option value='tuesday'>Tuesday</option>
                      <option value='wednesday'>Wednesday</option>
                      <option value='thursday'>Thursday</option>
                      <option value='friday'>Friday</option>
                      <option value='saturday'>Saturday</option>
                    </select>
                  </div>
                  <div>
                    <p className='form__label'>Starting Time*</p>
                    <input
                      type='time'
                      name='startingTime'
                      value={item.startingTime}
                      className='form__input'
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Ending Time*</p>
                    <input
                      type='time'
                      name='endingTime'
                      value={item.endingTime}
                      className='form__input'
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div onClick={(e) => deleteTimeSlot(e, index)} className='flex items-center'>
                    <button className='bg-red-600 p-2 rounded-full text-[18px] text-white mt-6 '>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className='bg-[#3f3939] py-2 px-5 rounded text-white h-fit'>
            Add TimeSlot
          </button>
        </div>
        <div className='mb-5'>
          <p className='form__label'>About*</p>
          <textarea
            name='about'
            rows={5}
            value={formData.about}
            placeholder='Write About You Here...'
            onChange={handleInputChange}
            className='form__input'></textarea>
        </div>
        <div className='mb-5 flex items-center gap-3'>
          {formData.photo && (
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
              <img src={formData.photo} alt='avatar' className='rounded-full w-full' />
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
        <div className='mt-7'>
          <button
            type='submit'
            onClick={updateProfileHandler}
            className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}
export default Profile
