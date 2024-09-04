import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/** About img */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt='about image' />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutCardImg} alt='aboutCardImg' />
            </div>
          </div>
          {/** About content */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Transforming Healthcare with AI & Technology</h2>
            <p className='text__para'>
              At <span className='text-primaryColor font-[800]'>WeCareHealth</span>, we integrate our advanced AI
              language model to bridge the gap between patients and healthcare providers. This technology ensures more
              efficient communication, accurate diagnostics, and tailored treatment plans, bringing you the care you
              need, when you need it.
            </p>
            <p className='text__para mt-4'>
              By combining AI-driven insights with the expertise of our healthcare professionals, we empower both
              patients and doctors to make informed decisions, improving outcomes and revolutionizing the healthcare
              experience. Experience a new era of care with us.
            </p>
            <Link to='/'>
              <button className='btn'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
