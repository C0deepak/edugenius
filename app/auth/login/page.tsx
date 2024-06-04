import LoginForm from '@/components/auth/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='p-8 md:p-16 min-h-screen flex items-center justify-center'>
      <LoginForm />
    </div>
  )
}

export default LoginPage