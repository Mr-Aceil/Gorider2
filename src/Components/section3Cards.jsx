import React, { useState } from 'react'
import Learn from './learnMore'

export default function section3Cards({overlayt='Add an overlay Text', name='Put Something',bg2='bg-[url("../src/assets/HomeImages/section3/textbgpng.png")]',bg='bg-[url("../src/assets/HomeImages/section3/sec3bg01.png")]'}) {
    const cancel= <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24"><path fill="none" stroke="#ae29d6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
    const icon= <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.125 11.0833C7.125 11.5206 7.47944 11.875 7.91667 11.875C8.35389 11.875 8.70833 11.5206 8.70833 11.0833V10.2917C8.70833 9.41722 9.41721 8.70833 10.2917 8.70833H11.0833C11.5206 8.70833 11.875 8.35389 11.875 7.91667C11.875 7.47944 11.5206 7.125 11.0833 7.125H10.2917C9.41722 7.125 8.70833 6.41612 8.70833 5.54167V4.75C8.70833 4.31277 8.35389 3.95833 7.91667 3.95833C7.47944 3.95833 7.125 4.31277 7.125 4.75V5.54166C7.125 6.41612 6.41612 7.125 5.54167 7.125H4.75C4.31277 7.125 3.95833 7.47944 3.95833 7.91667C3.95833 8.35389 4.31277 8.70833 4.75 8.70833H5.54167C6.41612 8.70833 7.125 9.41721 7.125 10.2917V11.0833ZM7.91667 15.8333C6.82153 15.8333 5.79236 15.6288 4.82917 15.2198C3.86597 14.7976 3.02812 14.2302 2.31562 13.5177C1.60312 12.8052 1.03576 11.9674 0.613542 11.0042C0.204514 10.041 0 9.0118 0 7.91667C0 6.82153 0.204514 5.79236 0.613542 4.82917C1.03576 3.86597 1.60312 3.02812 2.31562 2.31562C3.02812 1.60312 3.86597 1.04236 4.82917 0.633333C5.79236 0.211111 6.82153 0 7.91667 0C9.0118 0 10.041 0.211111 11.0042 0.633333C11.9674 1.04236 12.8052 1.60312 13.5177 2.31562C14.2302 3.02812 14.791 3.86597 15.2 4.82917C15.6222 5.79236 15.8333 6.82153 15.8333 7.91667C15.8333 9.0118 15.6222 10.041 15.2 11.0042C14.791 11.9674 14.2302 12.8052 13.5177 13.5177C12.8052 14.2302 11.9674 14.7976 11.0042 15.2198C10.041 15.6288 9.0118 15.8333 7.91667 15.8333ZM7.91667 14.25C9.68472 14.25 11.1823 13.6365 12.4094 12.4094C13.6365 11.1823 14.25 9.68472 14.25 7.91667C14.25 6.14861 13.6365 4.65104 12.4094 3.42396C11.1823 2.19687 9.68472 1.58333 7.91667 1.58333C6.14861 1.58333 4.65104 2.19687 3.42396 3.42396C2.19687 4.65104 1.58333 6.14861 1.58333 7.91667C1.58333 9.68472 2.19687 11.1823 3.42396 12.4094C4.65104 13.6365 6.14861 14.25 7.91667 14.25Z" fill="#6C2899"/></svg>
    const [cardInfo, setCardInfo]= useState(false)
    const toggle = () => {
        setCardInfo(!cardInfo)
    }
    
    return (
        <div onClick={toggle} className={`relative overflow-hidden flex flex-col h-CardHeight ${bg} bg-sparebg bg-no-repeat justify-between bg-cover bg-center rounded-[20px] p-2 between gap-1`}>
            <div className='w-full justify-end flex'>
                <Learn others={`z-[1] `} 
                        name={cardInfo ? '' : 'Learn more'} 
                        pl={cardInfo ? '' : 'pl-[15px]'}
                        gap={cardInfo ? '': 'gap-2'}
                        icons={cardInfo ? cancel : icon}/>
            </div>
            
            <div className={`transition-all duration-300 ${cardInfo ? 'translate-y-0' : 'translate-y-full'} ease-in-out absolute top-0 right-0 p-2 h-full w-full bg-bgasht backdrop-blur-[50px]`}>
                <div className='flex h-full w-full items-end'>
                <p className='text-h3 text-textmain clash'>{overlayt}</p>
                </div>
            </div>

            <div>
            <h2 className={`text-h2 ${bg2}  font-bold text-textmain flex icenter jcenter p-2 w-fit bg-center bg-no-repeat`}>{name}</h2>
            </div>
        </div>
    )
}