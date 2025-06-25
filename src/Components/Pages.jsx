import React from 'react'

export default function Pages({others}) {
    return (
        <div className={`flex gap-4 text-textmain text-p ${others}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Company</a>
        </div>
    )
}