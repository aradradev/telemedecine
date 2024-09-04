import avatarIcon from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
const Feedback = () => {
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews (272)</h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatarIcon} alt='avatarIcon' />
            </figure>
            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Ali patient</h5>
              <p className='text-[14px] leading-6 font-semibold text-textColor'>{formateDate('09-04-2024')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Feedback
