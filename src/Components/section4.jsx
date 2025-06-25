import React from 'react'
import Tag from './tags'
import Button from './Button'
import Iphone from '../../src/assets/HomeImages/section4/iphone.png'
import Verify from '../../src/assets/HomeImages/section5/Trust2.png'

export default function section4() {
    return (
        <>
        <section className='out icenter jcenter bg-[url("../src/assets/HomeImages/section4/sec4bg.png")] bg-cover bg-no-repeat bg-center'>
            <div className='in flex-col p-section icenter jcenter gap-6'>
                <Tag name='Our App' icons=''/>

                <div className='flex items-stretch bg-blackbg icenter max1-6k p-6 gap-4 rounded-[20px] 
                                max-[761px]:flex-col 
                                max-[761px]:p-2'>
                    <div className='flex flex-col gap-4 grow-[1]'>
                        <h3 className='text-h1 text-textmain font-bold max-[1200px]:text-h2'>Your Trusted Partners for Local <span className='bg-backgroundp'>Delivery Needs.</span></h3>
                        <p className='text-h3 text-textmain'>Experience the best in delivery services.</p>
                        <Button others='w-fit'/>
                    </div>

                    <img src={Iphone} className='w-[500px] 
                                                max-[1200px]:w-full
                                                max-[1200px]:max-w-[300px]' alt="" />
                </div>
            </div>
        </section>

        <section className='out icenter jcenter bg-backgroundw'>
            <section className='in flex-col p-section icenter jcenter gap-6'>
                <div className='flex flex-col icenter jcenter max1k gap-smallgap'>
                    <Tag name='GoRider Assure' icons=''/>
                    <p className='text-h3 font-bold text-center text-textsecondary'>Trusted. Insured.  <span className='bg-[url("../src/assets/HomeImages/section3/textbgpng.png")] bg-no-repeat text-textmain '>Verified for safety</span></p>
                </div>

                <div className='flex items-stretch text-textsecondary bg-backgroundw shadow-[3px_3px_10px_#00000027] border-1 border-solid border-[#cecece] icenter max1-6k p-6 gap-4 
                                max-[900px]:flex-col
                                max-[900px]:icenter
                                max-[761px]:p-2
                                max-[900px]:jcenter rounded-[20px]'>
                    <img src={Verify} className='hidden 
                                                max-[900px]:w-[full]
                                                max-[900px]:max-w-[100px]
                                                max-[900px]:block' alt="Verified" />

                    <div className='gap-3 flex flex-col
                                    max-[900px]:text-center max-[900px]:items-center max-[900px]:justify-center rounded-[20px]'>
                        <h2 className='text-h2 font-bold'>The GoRider Safty Pact</h2>
                        <h3 className='text-h3'>Safety is a shared promise between customers, delivery partners and GoRider. This 4-way pact ensures eveery delivery is protected, reliable, trusted and certified. Each person plays a role- from clear instructions to professional consuct to platform support. Look for the GoRider Verified Badge as a mark of trusted, trained and verified delivery partners. Together, we keep eveery order on the right track.</h3>
                        <Button name='Coming soon' bg='bg-backgroundp w-fit' textColor='text-textmain'/>
                    </div>

                    <img src={Verify} className='w-[300px] max-[900px]:hidden' alt="Verified" />
                </div>
            </section>
        </section>
        </>
    )
}
