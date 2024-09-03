import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
      {/** Hero section */}
      <>
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
          <div className='container'>
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
              {/** Hero content */}
              <div>
                <div className='lg:w-[570px]'>
                  <h1 className='text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]'>
                    Your Health, Our Priority at <span className='text-primaryColor font-[800]'>WeCareHealth</span>
                  </h1>
                  <p className='text__para mt-4 text-[18px] leading-[28px] text-textColor font-[400] md:text-[22px] md:leading-[32px]'>
                    Your trusted partner in healthcare. Find doctors, book appointments, and access your medical history
                    all in one place.
                  </p>
                  <button className='btn'>Request an Appointment</button>
                </div>
                {/** hero counter */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      15+
                    </h2>
                    <span className='w-[100px] h-2 bg-orange-500 rounded-full block mt-[-14px]'></span>
                    <p className='text_para'>Years of Experience</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      500+
                    </h2>
                    <span className='w-[100px] h-2 bg-blue-400 rounded-full block mt-[-14px]'></span>
                    <p className='text_para'>Customer Success Stories</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      30+
                    </h2>
                    <span className='w-[100px] h-2 bg-red-400 rounded-full block mt-[-14px]'></span>
                    <p className='text_para'>Clinic Partnerships</p>
                  </div>
                </div>
              </div>
              {/** Hero content */}
              <div className='flex gap-[30px] justify-end'>
                <div>
                  <img src={heroImg1} className='w-full' alt='hero Image 1' />
                </div>
                <div className='mt-[40px]'>
                  <img src={heroImg2} alt='hero image 2' className='mb-[36px] w-full' />
                  <img src={heroImg3} alt='hero image 3' className='w-full' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      {/** Hero section end*/}

      {/** section start here*/}
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className=' heading text-center'>Comprehensive Healthcare at Your Fingertips</h2>
            <p className='text__para mt-4 text-center'>
              At WeCareHealth, we bring quality healthcare services directly to your home. Whether you need a
              consultation with a specialist, follow-up care, or access to your medical history, our platform ensures
              you get the care you need anytime, anywhere.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon1} alt='icon 1' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Connect with our network of experienced healthcare professionals, ready to assist with your medical
                  needs.
                </p>
                <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon2} alt='icon 2' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Access Medical Records
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Easily access and manage your medical history and records in one secure location, anytime you need.
                </p>
                <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon3} alt='icon 3' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Online Consultation</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Schedule and attend virtual consultations from the comfort of your home, with doctors available around
                  the clock.
                </p>
                <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** About section start here */}
      <About />
      {/** About section end here */}

      {/** services section start */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our medical services</h2>
            <p className='text__para text-center'>
              Our medical services are designed to provide you with the best possible care. From routine check-ups to
              complex surgeries, we have the expertise and technology to handle any medical need.
            </p>
          </div>
        </div>
      </section>
      {/** services section end*/}
    </>
  )
}
export default Home
