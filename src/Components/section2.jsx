import React from 'react'
import Tags from './tags'
import Cards from './section2Cards'

export default function section2() {
    const img2= "bg-[url('../src/assets/HomeImages/section2/Img2.png')]"
    const img3= "bg-[url('../src/assets/HomeImages/section2/Img3.png')]"
    const tbg2= "bg-[url('../src/assets/HomeImages/section2/tbg2.png')]"
    const tbg3= "bg-[url('../src/assets/HomeImages/section2/tbg3.png')]"

    return (
        <>
        <section className='out jcenter icenter bg-backgroundw '>
            <div className='in jcenter icenter flex-col p-section gap-3'>
                <h2 className='text-h2 font-bold max1k text-center'>Modernizing last-mile delivery through  innovation, smart tech, and empowered local riders</h2>
                
                <div className='flex max8h between icenter gap-2 flex-wrap'>
                    <div className='text-center flex flex-col '>
                        <p className='font-bold text-h12'>50+</p> 
                        <p className='text-h3'>Riders</p>
                    </div>
                    
                    <div className='text-center flex flex-col '>
                        <p className='font-bold text-h12'>100+</p> 
                        <p className='text-h3'>Waitlisted</p>
                    </div>
                    
                    <div className='text-center flex flex-col '>
                        <p className='font-bold text-h12'>10+</p> 
                        <p className='text-h3'>Trusted stores</p>
                    </div>
                </div>
            </div>
        </section>

        <div className='flex flex-col pb-section2'>
            <div className='out pt-[60px] icenter jcenter flex-col gap-smallgap p60'>
                <Tags name='GoRider App' icons=''/>
                <p className='text-h3 font-bold text-center'>All services for you in a single app</p>
            </div>

            <section className='out  jcenter bg-[url("../src/assets/HomeImages/section2bg.png")] bg-no-repeat bg-contain max-[1600px]:bg-cover bg-center out jcenter icenter '>
                <div className='in2 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
                                max-[310px]:flex 
                                max-[310px]:flex-col
                                max-[310px]:icenter
                                max-[310px]:jcenter
                                max-[310px]:w-full gap-4 '>
                    <Cards />
                    <Cards name='Grow your sales- Reach more customers Fatser' bg={img2} bg2={tbg2} rotate='rotate-[2deg]'/>
                    <Cards name='Earn on the go- Deliver fast, get paid faster' bg={img3} bg2={tbg3} rotate='rotate-[2deg]'/>
                </div>
            </section>
        </div>
        </>
    )
}
