import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <div className='text-white mt-20'>
        <div className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>
            
                <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>

                {/* grid section */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2
                 border-white pb-6">

                    {/* address section */}

                    <div className='text-center space-y-4'>
                   
                    <div className='flex justify-center'>
                        <IoLocationSharp className='text-5xl'/>

                    </div>
                    <p>
                        #92, 3rd Main Post 
                        <br /> Gulberg Main Market Lahore 54000

                    </p>
                    </div>
                    {/* address section end */}

                    {/* email section start */}
                    <div className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <MdEmail className='text-5xl'/>
                        </div>
                        <div>
                         <p>info@goodfood.com</p>
                         <p>hr@goodfood.com</p>

                        </div>

                    </div>


                    {/* email section end  */}

                    {/* number section start */}
                    <div className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <FaPhone className='text-5xl'/>
                        </div>
                        <div>
                         <p>+92 344444444 - Sales and Services</p>
                         <p>+92 344444444 - Hiring Queries</p>
                         <p>+92 344444444 - Whstapp</p>

                        </div>

                    </div>

                    {/* number section end */}

                </div>
                {/* grid section end */}

                {/* bootom footer section start */}
                <div className=' flex  justify-between  items-center p-4'>
                    <p>2022 TC3, All rights reserved</p>
                    <div className='flex items-center gap-6'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>


                    </div>
                </div>



                {/* bottom footer section end */}



        </div>

    </div>
      
    </>
  )
}

export default Footer
