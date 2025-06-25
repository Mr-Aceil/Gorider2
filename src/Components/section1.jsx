import React from 'react'
import Button from './Button'
import Tags from './tags'



export default function section1() {
    return (
        <main className='out jcenter icenter'>
            <div className='in jcenter icenter p-section flex-col gap-5 text-textmain'>
                <div className='flex flex-col gap-2 jcenter icenter'>
                    <h1 className='text-h1 w-full max-w-[1000px] text-center text-bold clash'>Making every delivery worth the wait, we deliver convince</h1>
                    <p className='text-p w-full max-w-[1000px] text-center text-textash'>Send orders, what you want when you want, send or recive any time anywhere you want within your zone in minutes with flash riders on the G0!!!</p>
                </div>
            
                <div className='flex gap-smallgap 
                                max-[370px]:flex-col
                                max-[370px]:w-full'>
                    <Button link='http://wa.link/04k83f' name='Deliver now' others='border-1 border-solid border-white' bg='bg-transparent hover:bg-textash hover:text-textsecondary' textColor='text-textmain'/>
                    <Button name='Join waitlist'/>
                </div>

                <div className='flex gap-smallgap icenter jcenter flex-wrap w-full max-w-[1000px]
                                max-['>
                    <Tags name='Fast deliverires'/>
                    <Tags name='Order 24/7'/>
                    <Tags name='Lesser delivery time'/>
                    <Tags name='Lesser time span'/>
                </div>

                <div className="flex flex-col p-Image1p rounded-[20px] border-[3px] border-white border-solid  w-full max-w-[1000px] bg-[url('../src/assets/HomeImages/mainImage.png')] bg-center bg-no-repeat bg-cover icenter gap-2">
                    <div className='flex flex-col h-[300px] between w-full'>
                        <h2 className='text-h2 font-[800] bg-bgblur p-smallgap backdrop-blur-[10px] rounded-[20px]'>Deliver packages <span className="text-textsecondary section1span no-wrap">whenever to where ever</span> you want with us 24/7
                        </h2>

                        <Button name='Deliver now' textColor='white' bg='bg-backgroundp' others='w-fit'/>
                    </div>
                </div>
            </div>
        </main>
    )
}
