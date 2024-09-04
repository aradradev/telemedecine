import { useState } from 'react'
const FaqItem = ({ item }) => {
  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#d9dce2] mb-5 cursor-pointer'>
      <div className='flex items-center justify-between gap-5'>
        <h4 className='text-[16px] leading-7 lg:leading-8 text-headingColor'>{item.question}</h4>
      </div>
    </div>
  )
}
export default FaqItem