'use client'
import axios from "axios"
import { useState, useEffect } from "react"
type Data = {
  email: string;
  name: string;
  _id: string;
}
export default function Home() {
  const [data, setData] = useState<Data>({
    email: '',
    name: '',
    _id: '',
  })
  const getUser = async () => {

    try {
      const { data } = await axios.get('/api/user')
      setData(data.data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <h1 className='h-screen flex items-center justify-center'>
        Welcome to Home page
        <p className="text-xl font-bold capitalize ml-3">{data?.name}</p>
      </h1>
    </>
  )
}
