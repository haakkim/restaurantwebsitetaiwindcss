import React from 'react'
import PrimaryButton from '../Shared/PrimaryButton'

const BgStyle = {
  backgroundImage: 'url(heroBg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%'
};


const Hero = () => {
  return (
    <>
    <div className='relative z-[-1]'>
        <div className="container py-16 sm:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">

                {/* text content section start */}
                  <div className='space-y-7 text-dark order-2 sm:order-1'>
                    <h1 className='text-5xl'>Fresh & Healthy Meal <span className='text-secondary
                    text-7xl'>Delivery</span> Plan  in Miami</h1>
                    <p className='lg:pr-64'>Delicious Meals Delivered to Your Door From $132.95 per week</p>
                     {/* button section */}
                     <div>
                        <PrimaryButton/>

                        

                     </div>
                     {/* button section end */}

                  </div>

                 {/* text content section end */}
                 {/* image section start */}
                  <div className=' relative z-30 order-1 sm:order-2'>
                    <img src="hero.png" alt=""
                     className='w-full sm:scale-125 sm:translate-y-16' />


                  </div>
                 {/* image section end */}



            </div>

        </div>

    </div>

      
    </>
  )
}

export default Hero
