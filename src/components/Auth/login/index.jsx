'use client'
import React from 'react'
import { Form, Input, Button } from 'antd'
import axios from 'axios'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { notification } from 'antd'
import { useEffect } from 'react'



const Login = () => {
    const { authIsOpen, authIsOpenSet } = useAuthStore()
    const { user, setUser, clearUser } = useUserStore()
    const { message, setMessage } = useMessageStore();
    const { openNotification, contextHolder } = useNotificationMessage();


    const useAuthStore = create((set) => ({
  authIsOpen: false,
  authIsOpenSet: () => set((state) => ({
    authIsOpen: !state.authIsOpen, 
  })),
}))

const useUserStore = create(
  persist(
    (set) => ({
      user: null, 
      setUser: (userData) => set({ user: userData }), 
      clearUser: () => set({ user: null }), 
    }),
    {
      name: 'user', 
      getStorage: () => localStorage, 
    }
  )
)

const useNotificationMessage = () => {
    const { message, messageType, clearMessage } = useMessageStore()
    const [api, contextHolder] = notification.useNotification()

    useEffect(() => {
        if (!message || !messageType) return

        const type = messageType.toLowerCase()
        const validTypes = ['success', 'info', 'warning', 'error']
        const notify = validTypes.includes(type) ? api[type] : api.info

        notify({
            message: type.toUpperCase(),
            description: message,
            placement: 'topRight',
        })

        clearMessage()
    }, [message, messageType])

    return { contextHolder }
}



const useMessageStore = create((set) => ({
  message: '',
  messageType: '',
  setMessage: (message, type) => set({ message, messageType: type }),
  clearMessage: () => set({ message: '', messageType: '' }), 
}));


    const onFinish = async (value)=>{
        const {username  , password} = value;
        try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });

            setMessage('Success', 'Success');
      setUser(response.data);
            authIsOpenSet()
    } catch (error) {
            setMessage(error.message, 'Error');
    }
    }



    return (
        <div>
            <Form
                name='login'
                layout='vertical'
                onFinish={onFinish}
                autoComplete='off'
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please enter your username!' }]}
                >
                    <Input placeholder='Username' className='h-[40px]' />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password className='h-[40px]' placeholder='Password' />
                </Form.Item>
                <p className='text-end text-[#46A358] text-[14px] leading-[16px] mb-[38px] '>
                    Forgot Password?
                </p>

                <Form.Item>
                    <button
                        type='submit'
                        className='w-full h-[40px] leading-[16px] rounded-[10px]  text-[16px] text-white font-bold bg-[#46A358]'
                    >
                        Login
                    </button>
                </Form.Item>
            </Form>

            <div className='mt-[46px]'>
                <div className='relative flex items-center justify-center'>
                    <p className='text-[#3D3D3D] uppercase text-[13px] leading-[16px] text-center bg-white px-[10px] py-[5px] relative z-30'>
                        Or login with
                    </p>
                    <div className='h-[1px] w-full absolute top-1/2 bg-[#EAEAEA] z-0 -translate-y-1/2'></div>
                </div>

                <button className='w-full h-[40px] mb-[15px] mt-[27px] gap-[10px] flex items-center justify-center border-[1px] border-[#EAEAEA] rounded-[5px]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 48 48'
                    >
                        <path
                            fill='#4285F4'
                            d='M43.6 20.5H42V20H24v8h11.3c-1.6 4.5-5.8 8-11.3 8a12 12 0 1 1 0-24c3.1 0 6 1.2 8.2 3.1l6-6A20 20 0 0 0 24 4a20 20 0 1 0 0 40c10 0 20-7.5 20-20 0-1.3-.1-2.5-.4-3.5z'
                        />
                        <path
                            fill='#34A853'
                            d='M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3.1 0 6 1.2 8.2 3.1l6-6A20 20 0 0 0 24 4c-7.4 0-13.9 4.1-17.7 10.7z'
                        />
                        <path
                            fill='#FBBC05'
                            d='M24 44c5.3 0 10.3-2 14-5.4l-6.5-5.4c-2.2 2-5.1 3.2-8.5 3.2-5.5 0-10.2-3.5-11.8-8.4l-6.6 5.1C8.3 39.9 15.5 44 24 44z'
                        />
                        <path
                            fill='#EA4335'
                            d='M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.4l6.5 5.4c-1.2 1.1 6.3-4.6 6.3-13.3 0-1.3-.1-2.5-.4-3.5z'
                        />
                    </svg>
                    Login with Google
                </button>
                <button className='w-full h-[40px] flex gap-[10px] justify-center items-center border-[1px] border-[#EAEAEA] rounded-[5px]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='35'
                        height='35'
                        fill='#1877F2'
                    >
                        <path d='M15.117 8.667H13V7.333c0-.517.206-.75.859-.75H15V4.25h-2.206c-2.365 0-3.294 1.01-3.294 2.938v1.479H8v2.417h1.5V20h3V11.084h2.173l.444-2.417z' />
                    </svg>
                    Login with Facebook
                </button>
            </div>
        </div>
    )
}

export default Login