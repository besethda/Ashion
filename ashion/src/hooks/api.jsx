import { useState, useEffect } from "react";

const baseURL = import.meta.env.VITE_API_URL ?? `http://localhost:3456/`

const useApi = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    if(!url) return
    const makeRequest = async () => {
      setLoading(true)
      try {
        let response = await fetch(baseURL + url)
        if(!response.ok){
          throw new Error(`Error: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    makeRequest()
  }, [url])
  return{ data, loading }
};

export default useApi;