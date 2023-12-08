'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
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

  const router = useRouter()

  const getUser = async () => {
    try {
      const { data } = await axios.get('/api/user')
      // console.log(data)
      setData(data.data)
      // return await data.json()
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/user/logout')

      console.log(data)
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className=' '>
        Welcome to Home page
        <p className="text-xl font-bold capitalize ml-3">{data?.name}</p>

      </h1>
      <button className="text-sm px-4 py-2 bg-blue-300 text-black rounded-md" onClick={logout}>Logout</button>
    </section>
  )
}
