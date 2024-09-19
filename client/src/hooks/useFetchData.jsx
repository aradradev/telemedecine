import { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })

        if (!response.ok) {
          const errorMessage = `Error ${response.status}: ${response.statusText || 'Failed to fetch data'}`
          console.error('Error fetching data:', errorMessage) // Log detailed error
          throw new Error(errorMessage)
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}
export default useFetchData
