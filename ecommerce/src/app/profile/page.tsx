'use client'
import React from 'react'
import axios from 'axios'

type IUser = {
    fullName: string,
    email: string,
    isAdmin: boolean,
    _id: string,
    createdAt: string,
    updatedAt: string,
}
const Profile = () => {
    const [user, setUser] = React.useState<IUser>({
        fullName: '',
        email: '',
        isAdmin: false,
        _id: '',
        createdAt: '',
        updatedAt: '',
    })
    React.useEffect(() => {
        axios.get('/api/user/me').then((res) => {
            setUser(res.data.user)
        })
    }, [])
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