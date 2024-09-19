/* eslint-disable react/prop-types */
const Error = ({ errMessage }) => {
  return (
    <div className='flex justify-center items-center'>
      <h3 className='text-headingColor text-[20px] leading-[30px] font-semibold'>{errMessage}</h3>
    </div>
  )
}

export default Error
