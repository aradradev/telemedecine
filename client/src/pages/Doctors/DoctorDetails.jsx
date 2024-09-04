import imgDoctor from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
const DoctorDetails = () => {
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={imgDoctor} alt='imgDoctor' className='w-full' />
              </figure>
              <div>
                <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  Surgeon
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>John Doe</h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] text-headingColor leading-5 lg:text-[16px] lg:leading-7 font-semibold'>
                    <img src={starIcon} alt='starIcon' /> 4.8
                  </span>
                  <span className='text-[14px] text-textColor leading-5 lg:text-[16px] lg:leading-7 font-[400]'>
                    (272)
                  </span>
                </div>
                <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
                  Dr. John Doe is a highly skilled surgeon with over 10 years of experience in providing exceptional
                  care. He is known for his precision and compassionate approach, ensuring the best outcomes for his
                  patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DoctorDetails
