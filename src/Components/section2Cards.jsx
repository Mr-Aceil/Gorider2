import React from 'react'
import LearnMore from './learnMore'


export default function section2Cards({name='Fast Easy Ordering- Delivered in no time', rotate='rotate-[-6deg]', bg='bg-[url("../src/assets/HomeImages/section2/Img1.png")]', bg2='bg-[url("../src/assets/HomeImages/section2/tbg1.png")]'}) {
    return (
        <div className={`${bg} bg-no-repeat bg-center bg-cover h-CardHeight grow-[1] p-smallgap rounded-[20px]`}>
            <div className='h-full w-full between flex flex-col'>
                <LearnMore/>

                <div className='w-full justify-end flex'>
                    <div className={` text-textmain ${bg2} bg-no-repeat bg-center bg-cover w-full max-w-[300px] p-5`}>
                        <p className={`text-[1.2em] ${rotate}`}>{name}</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}
