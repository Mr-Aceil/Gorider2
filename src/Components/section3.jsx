import React from 'react'
import Tags from './tags'
import Cards from './section3Cards'

export default function section3() {
    const img1= 'bg-[url("../src/assets/HomeImages/section3/sec3bg01.png")]'
    const img2= 'bg-[url("../src/assets/HomeImages/section3/sec3bg02.png")]'
    const img3= 'bg-[url("../src/assets/HomeImages/section3/sec3bg03.png")]'

    return (
        <section className='out icenter jcenter bg-backgroundw'>
            <div className='in icenter jcenter flex-col p-section gap-6'>
                <div className='flex flex-col icenter jcenter max1k gap-smallgap'>
                    <Tags name='Our Goals' icons=''/>
                    <p className='text-h3 font-bold text-center text-textsecondary'>Goals that keeps us focused <span className='bg-[url("../src/assets/HomeImages/section3/textbgpng.png")] bg-no-repeat text-textmain '>on being our best.</span></p>
                </div>

                <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
                                max-[310px]:flex 
                                max-[310px]:flex-col
                                max-[310px]:icenter
                                max-[310px]:jcenter
                                max-[310px]:w-full gap-4'>
                    <Cards name='Satisfaction' overlayt='"GoRider operates with certified standards, ensuring all deliveries meet professional, safety, and quality benchmarks required in modern logistics.' bg={img1}/>
                    <Cards name='Reliability' overlayt='"We pride ourselves on dependable, on-time delivery—driven by a verified rider network and supported by smart, responsive tracking systems.' bg={img2}/>
                    <Cards name='Trust' overlayt='"Your packages, your confidence. GoRider is built on secure transactions, clear communication, and total delivery accountability.' bg={img3}/>
                </div>
            </div>
        </section>
    )
}
