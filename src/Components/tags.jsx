import React from 'react'

const Icon= <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 14l3.5 3.5L19 6.5" color="#fff"/></svg>


export default function tags({name='Tags', icons=Icon}) {

    return (
        <div className='p-button2 flex w-fit gap-smallgap max-[391px]:w-full icenter jcenter text-textmain rounded-full bg-purple'>{icons} {name}</div>
    )
}
