import { useState } from 'react'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
  })
  const handleInputChange = () => {}
  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>
      <form></form>
      <div className='mb-5'>
        <p className='form__label'>Name *</p>
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
        <p className='form__label'>Email *</p>
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
        <p className='form__label'>Phone *</p>
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
        <p className='form__label'>Bio *</p>
        <input
          type='text'
          name='bio'
          value={formData.bio}
          placeholder='Bio'
          className='form__input'
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}
export default Profile
