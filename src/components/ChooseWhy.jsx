import React from 'react'
import { FaBus } from 'react-icons/fa'

const ChooseWhy = () => {
  return (
    <>
    <div  className='py-14 md:py-28 bg-gray-100'>
        <div className="container">
            <h1 className='py-16 tracking-wider text-2xl font-semibold text-dark text-center'>
                Why Choose Us</h1>

                {/* card section start */}
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
                        {/* list cards start */}
                        {/* 1 card */}
                        <div className='text-center flex justify-center items-center flex-col
                         gap-2 px-2'>
                            <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                            <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>----</p>
                            <FaBus className='text-5xl text-secondary'/>

                        </div>

                        {/* 2 card */}

                        <div className='text-center flex justify-center items-center flex-col
                           
                           gap-2 px-2'>
                              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                              <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>----</p>
                              <FaBus className='text-5xl text-secondary'/>
  
                          </div>
                          <div className='text-center flex justify-center items-center flex-col
                           
                           gap-2 px-2'>
                              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                              <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>----</p>
                              <FaBus className='text-5xl text-secondary'/>
  
                          </div>
                          <div className='text-center flex justify-center items-center flex-col
                           
                           gap-2 px-2'>
                              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                              <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>----</p>
                              <FaBus className='text-5xl text-secondary'/>
  
                          </div>

                        {/* list cards start */}




                    </div>

                </div>
                {/* card section end */}



        </div>



    </div>
      
    </>
  )
}

export default ChooseWhy
