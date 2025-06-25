import React, { useState } from 'react'


export default function QandAnswer({q='Add Question', ans='Add answer'}) {
    const [faqOpen, setIsFaqOpen]= useState(true)
    const open = ()=>{
        setIsFaqOpen(!faqOpen)
    }

    const trigger= <svg className={`${faqOpen ? 'rotate-0' : 'rotate-[180deg]'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#000" fillRule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"/></svg>


    return (
        <div onClickCapture={open} className='cursor-pointer flex flex-col gap-4 w-full border-[#00000027] border-1 border-solid p-2'>
            <div className='flex icenter jcenter gap-2 w-full between'>
                <h3 className='text-h3'>{q}</h3>
                {trigger}
            </div>

            <p className={`bg-white p-2 rounded-[20px] w-full icenter ${faqOpen ? 'hidden' : 'flex'}`}>{ans}</p>
        </div>
    )
}
