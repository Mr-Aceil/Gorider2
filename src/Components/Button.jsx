import React from 'react'

export default function Button({name='Button', link, icon, bg='bg-white', textColor='text-textsecondary', others}) {
    return (
        <a href={link} target='_blank'>
        <button className={`flex items-center justify-center p-button gap-smallgap text-p rounded-full ${textColor} ${bg} ${others}`} >
            {icon} {name}
        </button>
        </a>
    )
}
