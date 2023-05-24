import React from 'react'
import { imageResolver } from '../../utils/helpers'

const Author = ({data}) => {
  return (
    <div className='mx-auto max-w-[1200px] px-6 py-5'>
      <div className='w-[60%] shadow-2xl mx-auto flex px-8 gap-x-4 items-center'>
        <div className=' py-5'> <img src={imageResolver(data?.image).path} alt={data?.image?.data?.attributes?.alternativeText} className='w-[80px] rounded-[100%] ' /></div>
        <div className="flex flex-col items-center px-4">
          <h2 className=' text-left w-full text-lg font-bold'>{data?.name}</h2>
          <h2 className=' text-left w-full text-lg'>{data?.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default Author
