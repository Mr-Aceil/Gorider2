import React from 'react'
import Button from './Button'


export default function setion1Card({others, text1='Deliver packages',text2='whenever to where ever', text3='you want with us 24/7' ,bg="bg-[url('../src/assets/HomeImages/mainImage.png')]"}) {
    return (
        <div className={`flex flex-col p-Image1p max-[400px]:p-[10px] max1k ${bg} bg-center bg-no-repeat bg-cover icenter gap-2 bg-sparebg ${others}`}>
            <div className='flex flex-col h-[300px] between w-full'>
                <h2 className='text-h2 font-[800] bg-bgblur p-smallgap backdrop-blur-[10px] rounded-[20px]'>
                    {text1} <span className="text-textsecondary section1span no-wrap">{text2}</span> {text3}
                </h2>

                <Button link="https://gorider.ycode.site/#input-idh62pgii" name='Deliver now' textColor='white' bg='bg-backgroundp' others='w-fit'/>
            </div>
        </div>
    )
}