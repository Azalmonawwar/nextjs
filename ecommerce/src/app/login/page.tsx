'use client'
import Link from 'next/link';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Wrapper from '@/components/Wrapper';
import { loginSchema } from '@/formSchema/schema';
import axios from 'axios';
import toast from 'react-hot-toast';

type Inputs = {
    email: string;
    password: string;
}
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(loginSchema),
    })


    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response: any = await loginUser(data);
        if (response) {
            toast.success('Login success')
            router.push('/profile')
        }
    }
    const loginUser = async (data: Inputs) => {
        try {
            const response = await axios.post('/api/user/login', data)
            return response
        } catch (error: any) {
            toast.error(error.response.data.message)
            return error
        }
    }

    return (
        <Wrapper >
            <div className='flex min-h-full flex-col justify-center px-10 py-12 lg:px-8'>


                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" {...register("email")} name="email" type="email" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                                <input id="password" {...register("password")} name="password" type="password" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {<span className='text-red-400 text-sm'>{errors.password?.message}</span>}
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not have an account
                        <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Create now</Link>
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Login