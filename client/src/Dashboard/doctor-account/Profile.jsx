import { useState } from 'react'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: 0,
    qualifications: [{ startingDate: '', endingDate: '' }],
    experiences: [],
    timeSlots: [],
  })
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>
      <form></form>
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
                  <input type='date' name='startingDate' value={item.startingDate} className='form__input' />
                </div>
                <div>
                  <p className='form__label'>Ending Date*</p>
                  <input type='date' name='endingDate' value={item.endingDate} className='form__input' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Profile
