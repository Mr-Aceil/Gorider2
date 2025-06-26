import React from 'react'
import Button from './Button'
import Tags from './tags'
import Card1 from './setion1Card'



export default function section1() {
    return (
        <main className='out jcenter icenter'>
            <div className='in jcenter icenter p-section pt-[130px] flex-col gap-5 text-textmain'>
                <div className='flex flex-col gap-2 jcenter icenter'>
                    <h1 className='text-h1 w-full max-w-[1000px] text-center text-bold clash'>Making every delivery worth the wait, we deliver convince</h1>
                    <p className='text-p w-full max-w-[1000px] text-center text-textash'>Send orders, what you want when you want, send or recive any time anywhere you want within your zone in minutes with flash riders on the G0!!!</p>
                </div>
            
                <div className='flex gap-smallgap 
                                max-[370px]:flex-col
                                max-[370px]:w-full'>
                    <Button link='http://wa.link/04k83f' name='Deliver now' others='max-[391px]:w-full border-1 border-solid border-white' bg='bg-transparent hover:bg-textash hover:text-textsecondary' textColor='text-textmain'/>
                    <Button name='Join waitlist' others='max-[391px]:w-full' link="https://gorider.ycode.site/#input-idh62pgii" />
                </div>

                <div className='flex gap-smallgap icenter jcenter flex-wrap w-full max-w-[1000px]
                                max-['>
                    <Tags name='Fast deliverires'/>
                    <Tags name='Order 24/7'/>
                    <Tags name='Lesser delivery time'/>
                    <Tags name='Lesser time span'/>
                </div>

                <div className='rounded-[20px] border-[3px] border-white border-solid overflow-hidden max1k'>
                    <Card1 />
                </div>
            </div>
        </main>
    )
}
