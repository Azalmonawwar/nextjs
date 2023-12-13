import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'My profile',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="wrapper">
            <div className='flex '>
                <div className='flex flex-col'>
                    <h3 className='mb-10 p-3 text-xl font-bold tracking-wider'>My Profile</h3>
                    <div className='flex gap-4 bg-gray-200 rounded-md p-3'>
                        <Image src={'/user.png'} alt='user' height={40} width={40} />
                        <div>
                            <h2 className='font-semibold tracking-wide'>Azal monawwar</h2>
                            <p className='text-sm text-gray-500'>monawwarazal@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-4  p-3 text-gray-500'>
                        <Link href='/profile/info'>Personal Info</Link>
                    </div>
                    <div className='flex gap-4  p-3 text-gray-500'>
                        <Link href='/profile/orders'>Your Orders</Link>
                    </div>
                    <div className='flex gap-4  p-3 text-gray-500'>
                        <Link href='/profile/addresses'>Your Addresses</Link>
                    </div>
                    <div className='flex gap-4  p-3 text-gray-500'>
                        <Link href='/profile/payments'>Payments</Link>
                    </div>
                    <div className='flex gap-4  p-3 text-gray-500'>
                        <button className='btn px-2 py-1 md:py-2 md:px-4 bg-black text-white rounded-md w-full '>Logout</button>
                    </div>

                </div>
                {children}
            </div>

        </section>
    )
}
