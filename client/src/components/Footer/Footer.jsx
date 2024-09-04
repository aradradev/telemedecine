import { Link } from 'react-router-dom'
import logo from '../../assets/images/vector/logoBlack.svg'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'

const socialLinks = [
  {
    path: 'https://www.linkedin.com/company/wecarehealth',
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.facebook.com/wecarehealth',
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.twitter.com/wecarehealth',
    icon: <AiFillTwitterCircle className='group-hover:text-white w-4 h-5' />,
  },
]

const quickLinks01 = [
  {
    path: '/about',
    label: 'About Us',
  },
  {
    path: '/services',
    label: 'Our Services',
  },
  {
    path: '/doctors',
    label: 'Meet Our Doctors',
  },
  {
    path: '/contact',
    label: 'Contact Us',
  },
]

const quickLinks02 = [
  {
    path: '/faqs',
    label: 'FAQs',
  },
  {
    path: '/privacy',
    label: 'Privacy Policy',
  },
  {
    path: '/terms',
    label: 'Terms & Conditions',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
]

const quickLinks03 = [
  {
    path: '/careers',
    label: 'Careers',
  },
  {
    path: '/testimonials',
    label: 'Testimonials',
  },
  {
    path: '/news',
    label: 'Latest News',
  },
  {
    path: '/support',
    label: 'Support',
  },
]

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt='logo' className='w-40' />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright &copy; {year} developed by Jalloh all right reserved.
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Company</h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] font-[400] leading-7 text-textColor'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Resources</h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] font-[400] leading-7 text-textColor'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Get Involved</h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] font-[400] leading-7 text-textColor'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
