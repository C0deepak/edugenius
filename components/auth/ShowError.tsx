import React from 'react'
import { TriangleAlert } from 'lucide-react'

interface ErrorProps {
    message?: string
}

const ShowError = ({ message }: ErrorProps) => {
    if (!message) return null
    
    return (
        <div className='border border-red-500 text-red-500 font-medium px-4 py-2 rounded flex gap-2 items-center'><TriangleAlert size={20} />{message}</div>
    )
}

export default ShowError