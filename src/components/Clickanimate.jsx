import { delay } from 'framer-motion'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Singlecard from './Singlecard'
const Clickanimate = () => {
    const [open,setopen]=useState(false)
  return (
    <div className='mt-[50px] z-0 flex items-center justify-center h-[300px] relative'>
        <motion.button className='border-2 px-6 py-3 text-3xl font-bold rounded-md text-white absolute z-[1]'
        intial={{opacity:1 ,x:10}}
        animate={{rotate:360}}
        transistion={{duration:6,delay:6}}
        onClick={()=>setopen(!open)}
        >Click Me
        </motion.button>
        <div>
        {
            open && (
                <div className='md:ml-[20rem] z-10 relative'><Singlecard open={open} setopen={setopen}/></div>
            )
        }
        </div>
    </div>
  )
}

export default Clickanimate