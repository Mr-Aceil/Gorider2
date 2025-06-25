import React, { useState } from 'react'
import Logo from '../assets/logo/white.png'
import Pages from './Pages'
import Button  from './Button'

export default function Header() {
    const [Hamburger, setOpenHamburger]= useState(true)

    const toggle= () => {
        setOpenHamburger(!Hamburger)
    }
    const web= <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 48 48"><g fill="none" stroke="#000" strokeWidth="3"><path strokeLinejoin="round" d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"/><path strokeLinejoin="round" d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0"/><path strokeLinecap="round" d="M4.5 31h39m-39-14h39"/></g></svg>
    const hamburger= <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="30"  viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h10M4 12h16M7 12h13M4 18h10"/></svg>
    const cancel= <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 5L5 19M5 5l14 14" color="#fff"/></svg>

    return (
        <header className="out items-center justify-center p-header">
            <nav className='in items-center justify-between'>
                <img src={Logo} alt="Our logo" className='w-[100px]' />
                <Pages  others='justify-center items-center max-[1040px]:hidden'/>
                <div className=' flex items-center justify-center gap-smallgap
                                max-[1040px]:hidden'>
                    <Button name='Join the waitlist'/>
                    <Button icon={web} name='EN'/>
                </div>

                <div className='hidden max-[1040px]:flex gap-1'>
                    <Button icon={web} name='EN'/>
                    {hamburger}

                    <div className={`bg-bgblur fixed h-full w-full backdrop-blur-[10px] top-0 right-0 z-10 ${Hamburger ? 'translate-x-full' : 'translate-x-0'} transition-transform duration-300 ease-in-out`}>
                        <div className='h-full w-full between flex flex-col max-w-[300px] bg-backgroundp fixed top-0 right-0 p-3'>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex items-center justify-end'>
                                    {cancel}
                                </div>

                                <Pages others='flex-col '/>
                            </div>
                            
                            <Button name='Join us'/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
