import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'

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
          <ServiceList />
        </div>
      </section>
      {/** services section end*/}

      {/** Feature section start*/}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            {/** Feature content */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Get Virtual Treatment <br /> Anytime, Anywhere
              </h2>
              <ul className='pl-4'>
                <li className='text__para'>1. Connect with top specialists from the comfort of your home.</li>
                <li className='text__para'>2. Receive personalized care tailored to your health needs.</li>
                <li className='text__para'>3. Access your medical records securely anytime, anywhere.</li>
                <li className='text__para'>4. Enjoy 24/7 support for all your healthcare queries.</li>
              </ul>
              <Link to='/'>
                <button className='btn'>Learn More</button>
              </Link>
            </div>
            {/** feature img */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} alt='featureImg' />

              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] md:bottom-[100px] left-0 md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      Tue, 03
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      12:30 PM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt='videoIcon' />
                  </span>
                </div>
                <div className='w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-7 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                  Consultation
                </div>
                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt='avatarIcon' />
                  <h4 className='text-[10px] leading-3 lg:leading-[22px] font-[700] text-headingColor'>Dr. Alpha</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Feature section start*/}

      {/** Our great Doctor start here*/}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our great doctors</h2>
            <p className='text__para text-center'>
              Our medical services are designed to provide you with the best possible care. From routine check-ups to
              complex surgeries, we have the expertise and technology to handle any medical need.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/** Our great Doctor end here*/}

      {/** Faq section start here*/}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt='faqImg' />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>Most questions asked by our beloved patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/** Faq section end here*/}
      {/** testimonial start*/}
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
        </div>
      </section>
      {/** testimonial end */}
    </>
  )
}
export default Home
