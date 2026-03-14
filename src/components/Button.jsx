import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button = ({ children }) => {
  return (
    <button className='group px-8 py-3 bg-red-800 rounded-full cursor-pointer
      flex items-center gap-2
      font-medium text-base tracking-wide text-white
      hover:scale-[1.015]
      duration-500
      active:scale-100
    '>
      {children}
      <ArrowRight className='w-4' />
    </button>
  )
}

export default Button