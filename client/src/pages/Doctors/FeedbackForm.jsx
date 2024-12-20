import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BASE_URL } from '../../config'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    try {
      if (!rating || !reviewText) {
        setLoading(false)
        return toast.error('Review & Rating Fields are required!')
      }
      const resp = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ rating, reviewText }),
      })
      const result = await resp.json()
      console.log('resultForm data: ', result)
      if (!result.status) {
        throw new Error(result.msg || 'Something went wrong')
      }

      setLoading(false)
      toast.success(result.message)
    } catch (err) {
      setLoading(false)
      toast.error(err.message || 'Failed to submit review')
    }
  }

  return (
    <form action=''>
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index + 1
            return (
              <button
                key={index}
                type='button'
                className={`${
                  index <= ((rating && hover) || hover) ? 'text-yellowColor' : 'text-gray-400'
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setRating(0)
                  setHover(0)
                }}>
                <span>
                  <AiFillStar />
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your feedback or suggestions*
        </h3>
        <textarea
          className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md resize-none'
          placeholder='Write your message'
          onChange={(e) => setReviewText(e.target.value)}
          rows='5'></textarea>
      </div>
      <button className='btn' type='submit' onClick={handleSubmitReview}>
        {loading ? <HashLoader size={25} color='#fff' /> : 'Submit Feedback'}
      </button>
    </form>
  )
}
export default FeedbackForm
