const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text__para mt-0 font-semibold'>Ticket Price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>30K GNF</span>
      </div>
      <div className='mt-[30px]'>
        <p className='text__para mt-0 font-semibold text-textColor'>Available Time Slots</p>
        <ul className='mt-3'>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>Sunday</p>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>04:00 PM - 09-30 PM</p>
          </li>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>Monday</p>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>04:00 PM - 09-30 PM</p>
          </li>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>Tuesday</p>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>04:00 PM - 09-30 PM</p>
          </li>
        </ul>
      </div>
      <button className='btn px-2 rounded-md w-full'>Book Appointment</button>
    </div>
  )
}
export default SidePanel
