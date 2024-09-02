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
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}
export default Home
