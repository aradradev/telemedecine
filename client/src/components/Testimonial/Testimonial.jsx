import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt='patient avatar' />
              <div>
                <h4 className='text-[18px] font-semibold leading-[30px] text-headingColor'>John Doe</h4>
                <div className='flex items-center'>
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                </div>
              </div>
            </div>
            <p className='mt-4 text-[16px] leading-7 text-textColor font-[400]'>
              &quot;WeCareHealth has completely transformed my approach to healthcare. The convenience of virtual
              consultations combined with the personalized care from top-notch professionals has been a game-changer for
              me.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt='patient avatar' />
              <div>
                <h4 className='text-[18px] font-semibold leading-[30px] text-headingColor'>John Doe</h4>
                <div className='flex items-center'>
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                </div>
              </div>
            </div>
            <p className='mt-4 text-[16px] leading-7 text-textColor font-[400]'>
              &quot;WeCareHealth has completely transformed my approach to healthcare. The convenience of virtual
              consultations combined with the personalized care from top-notch professionals has been a game-changer for
              me.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt='patient avatar' />
              <div>
                <h4 className='text-[18px] font-semibold leading-[30px] text-headingColor'>John Doe</h4>
                <div className='flex items-center'>
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                </div>
              </div>
            </div>
            <p className='mt-4 text-[16px] leading-7 text-textColor font-[400]'>
              &quot;WeCareHealth has completely transformed my approach to healthcare. The convenience of virtual
              consultations combined with the personalized care from top-notch professionals has been a game-changer for
              me.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt='patient avatar' />
              <div>
                <h4 className='text-[18px] font-semibold leading-[30px] text-headingColor'>John Doe</h4>
                <div className='flex items-center'>
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                </div>
              </div>
            </div>
            <p className='mt-4 text-[16px] leading-7 text-textColor font-[400]'>
              &quot;WeCareHealth has completely transformed my approach to healthcare. The convenience of virtual
              consultations combined with the personalized care from top-notch professionals has been a game-changer for
              me.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt='patient avatar' />
              <div>
                <h4 className='text-[18px] font-semibold leading-[30px] text-headingColor'>John Doe</h4>
                <div className='flex items-center'>
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                  <HiStar className='text-[#FFC107] h-5' />
                </div>
              </div>
            </div>
            <p className='mt-4 text-[16px] leading-7 text-textColor font-[400]'>
              &quot;WeCareHealth has completely transformed my approach to healthcare. The convenience of virtual
              consultations combined with the personalized care from top-notch professionals has been a game-changer for
              me.&quot;
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Testimonial
