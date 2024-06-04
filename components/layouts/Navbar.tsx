import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { Tangent } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-16 px-16 fixed top-0 left-0 w-full bg-background border-b-[1px]'>
            <Link href="/" className='flex items-center font-semibold'><Tangent className='mr-2'/>EduGenius</Link>
            <Link href="/auth/login" className={buttonVariants({ variant: "default" })}>Sign In</Link>
        </div>
    )
}

export default Navbar