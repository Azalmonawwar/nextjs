'use client'
import { login } from '@/store/authSlice'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
type ILogin = {
    _id: string,
    fullName: string,
    email: string,
}
const Profile = () => {
    const { user } = useSelector((state: any) => state.auth)
    // console.log(user)
    const logout = async () => {
        try {
            const res = await fetch('/api/user/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.ok) {
                window.location.href = '/login'
            }
        } catch (err) {
            console.error(err)
        }
    }

    const auth = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()

    //getting cart length and user details from the server
    React.useEffect(() => {
        axios.get('/api/user/me').then((res) => {
            if (res.data.user) {
                dispatch(login({ _id: res.data.user._id, fullName: res.data.user.fullName, email: res.data.user.email }))
            }
        })

    }, [auth.isAuthenticated, dispatch])

    return (
        <div className='flex  flex-col m-5 p-5'>
            <div className='p-5'>
                <h2 className='font-semibold tracking-wide'>{user?.fullName}</h2>
                <p className='text-sm text-gray-500'>{user?.email}</p>
            </div>
            <div className='flex gap-4  absolute top-[20%] right-0 p-3 text-gray-500'>
                <button onClick={logout}>Logout</button>
            </div>
        </div>


    )
}

export default Profile