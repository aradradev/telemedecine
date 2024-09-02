import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'

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
                    Your Health, Our Priority at <span className='text-cyan-600 font-[800]'>WeCareHealth</span>
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
    </>
  )
}
export default Home
