import React from 'react'
import Learn from './learnMore'

export default function section3Cards({name='Put Something',bg2='bg-[url("../src/assets/HomeImages/section3/textbgpng.png")]',bg='bg-[url("../src/assets/HomeImages/section3/sec3bg01.png")]'}) {
    return (
        <div className={`flex flex-col h-CardHeight ${bg} bg-no-repeat justify-between bg-cover rounded-[20px] p-2 between gap-1`}>
            <div className='w-full justify-end flex'>
            <Learn />
            </div>

            <div>
            <h2 className={`text-h2 ${bg2}  font-bold text-textmain flex icenter jcenter p-2 w-fit bg-center bg-no-repeat`}>{name}</h2>
            </div>
        </div>
    )
}