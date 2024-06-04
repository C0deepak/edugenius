'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Social = () => {
    return (
        <div className='flex w-full items-center gap-x-2'>
            <Button
                className='w-full'
                variant='outline'
                onClick={() => { }}
            >
                <FcGoogle />
            </Button>
            <Button
                className='w-full'
                variant='outline'
                onClick={() => { }}
            >
                <FaGithub />
            </Button>
        </div>
    )
}

export default Social