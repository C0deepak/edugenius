import Navbar from '@/components/layouts/Navbar'
import { Badge } from '@/components/ui/badge'
import { Brain } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <Navbar />
      <div className='p-8 md:p-16 flex flex-col items-center max-w-[800px] text-center'>
        <Badge variant="secondary" className='w-fit'><Brain size={16} className='mr-4' /> Your Study Companion</Badge>
        <h1 className='mt-4 mb-8 font-extrabold text-4xl'>Welcome to EduGenius</h1>
        <p className='text-muted-foreground'>EduGenius is your AI-powered study companion 🎉. Instantly get accurate answers to any topic, making learning easier and more engaging. Whether you are studying for exams or exploring new subjects, EduGenius is here to help you succeed.</p>
      </div>
    </div>
  )
}

export default HomePage