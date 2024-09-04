/* eslint-disable react/prop-types */
import { useState } from 'react'
import { aiOutlineMinus, aiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#d9dce2] mb-5 cursor-pointer'>
      <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
        <h4 className='text-[16px] leading-7 lg:leading-8 text-headingColor'>{item.question}</h4>
        <div className={`w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141f21] rounded flex items-center justify-center`}>{isOpen ? <isOutlineMinus : isOutlinePlus}</div>
      </div>
    </div>
  )
}
export default FaqItem
