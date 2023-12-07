'use client'
import Link from 'next/link'
import { yupResolver } from "@hookform/resolvers/yup"
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from "yup"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
const schema = yup
    .object({
        name: yup.string().required(
            "Name is required"
        ).min(3),
        email: yup.string().required(
            "Email is required"
        ),
        password: yup.string().required(
            "Password is required"
        ).min(8),
    })
    .required()
type Inputs = {
    name: string;
    email: string;
    password: string;
}
const Register = () => {
    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // console.log(data)
        await registerUser(data)
    }

    const registerUser = async (data: Inputs) => {
        try {
            const response = await axios.post('/api/user/register', data)
            // console.log(response)
            if (response.status === 201) {
                // console.log(response.data.message)
                toast.success(response.data.message)
                router.push('/login')
            }
            if (response.status === 202) {
                toast.error(response.data.error)
            }

        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            reset()
        }
    }

    return (
        <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <input id="name" {...register("name")} name="name" type="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        {<span className='text-red-400 text-sm'>{errors.name?.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" {...register("email")} name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        {<span className='text-red-400 text-sm'>{errors.email?.message}</span>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" {...register("password")} name="password" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        {<span className='text-red-400 text-sm'>{errors.password?.message}</span>}
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already Register
                    <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> login</Link>
                </p>
            </div>
        </section>
    )
}

export default Register