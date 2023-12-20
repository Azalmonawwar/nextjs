'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
const Profile = () => {
    const { isAuthenticated } = useSelector((state: any) => state.auth);
    const router = useRouter()
    React.useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated])

    return (
        <div className='flex '>
            hellow
        </div>
    )
}

export default Profile