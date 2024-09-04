const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About <span className='text-irisBlueColor font-bold text-[24px] leading-9'>John Doe</span>
        </h3>
        <p className='text__para'>
          Dr. John Doe is a highly skilled surgeon with over 10 years of experience in providing exceptional care. He is
          known for his precision and compassionate approach, ensuring the best outcomes for his patients.
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold '>04 September, 2010</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Appollo, New York.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default DoctorAbout
