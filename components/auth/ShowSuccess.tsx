import React from 'react'
import { CheckCircle, CircleCheck, TriangleAlert } from 'lucide-react'

interface SuccessProps {
    message?: string
}

const ShowSuccess = ({ message }: SuccessProps) => {
    if (!message) return null

    return (
        <div className='border border-emerald-500 text-emerald-500 font-medium px-4 py-2 rounded flex gap-2 items-center'><CircleCheck size={20} /> {message}</div>
    )
}

export default ShowSuccess