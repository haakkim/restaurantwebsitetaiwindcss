import React from 'react'

const Email = () => {
  return (
    <div className='bg-red-500  mt-5 text-white'>
        <div className='py-10 px-8'>
            <h1 className='text-5xl text-center font-bold mb-3' >Login & SignUp</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-5 '>
                <div>
                    <h3 className='mb-1'>Email</h3>
                    <input  className='mb-2 rounded-md border-gray-400 border-spacing-0 p-2 w-full' type="Email" name="" id="" placeholder='Enter Email' />
                    <h3  className='mb-1'>Password</h3>
                    <input className='mb-2 rounded-md border-gray-400
                     border-spacing-0 p-2 w-full' type="Password" name="" id="" placeholder='Enter Password' />
                     <button className='text-white text-2xl 
                     text-center p-2 px-10 rounded-md bg-amber-700 hover:bg-green-500 hover:text-red-600'>login</button>

                </div>

                <div>
                <h3 className='mb-1'>Name</h3>
                    <input  className='mb-2 rounded-md border-gray-400 border-spacing-0 p-2 w-full' 
                    type="text" name="" id="" placeholder='Enter Name' />
                    <h3 className='mb-1'>Phone Number</h3>
                    <input  className='mb-2 rounded-md border-gray-400 border-spacing-0 
                    p-2 w-full' 
                    type="phone" name="" id="" placeholder='Enter Phone' />
                    <h3 className='mb-1'>Email</h3>
                    <input  className='mb-2 rounded-md border-gray-400 border-spacing-0 p-2 w-full' type="Email" name="" id="" placeholder='Enter Email' />
                    <h3  className='mb-1'>Password</h3>
                    <input className='mb-2 rounded-md border-gray-400 
                    border-spacing-0 p-2 w-full' type="Password" name="" id="" placeholder='Enter Password' />
                     <button className='text-white text-2xl 
                     text-center p-2 px-10 rounded-md bg-amber-700
                      hover:bg-green-500 hover:text-red-600'>SignUp</button>

                </div>
                



            </div>



        </div>

      
    </div>
  )
}

export default Email
