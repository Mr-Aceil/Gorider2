import React from 'react'
import Logo from '../../src/assets/logo/white.png'

export default function Fotter() {
    return (
        <footer className='out jcenter icenter bg-blackbg'>
            <section className='in between flex-col gap-5 icenter py-[20px]'>
                <div className='flex w-full between icenter'>
                    <img src={Logo} className='w-[100px]' alt="Our logo" />
                </div>

                <div className='flex between w-full gap-2 gap-y-5
                                max-[860px]:grid 
                                max-[860px]:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]'>
                    <div className='flex flex-col gap-smallgap text-textmain'>
                        <p href="#" className='text-p font-bold'>Pages</p>
                        <a href="#" className='text-p'>Home</a>
                        <a href="#" className='text-p'>About</a>
                        <a href="#" className='text-p'>Contact</a>
                        <a href="#" className='text-p'>Company</a>
                        <a href="#" className='text-p'>WaitList</a>
                    </div>
                    
                    <div className='flex flex-col gap-smallgap text-textmain'>
                        <p href="#" className='text-p font-bold'>Socials</p>
                        <a href="https://www.instagram.com/gorider.inc?igsh=YzljYTk1ODg3Zg==" target='_blank' className='text-p'>Instagram</a>
                        <a href="https://x.com/Gorider_Inc" target='_blank' className='text-p'>Twitter</a>
                        <a href="https://www.facebook.com/profile.php?id=61577293847990" target='_blank' className='text-p'>Facebook</a>
                    </div>
                    
                    <div className='flex flex-col gap-smallgap text-textmain'>
                        <p href="#" className='text-p font-bold'>Support</p>
                        <a href="#" className='text-p'>Rider</a>
                        <a href="#" className='text-p'>Driver</a>
                        <a href="#" className='text-p'>Couriers</a>
                    </div>
                    
                    <div className='flex flex-col gap-smallgap text-textmain'>
                        <p href="#" className='text-p font-bold'>Company</p>
                        <a href="#" className='text-p'>About</a>
                        <a href="#" className='text-p'>Blogs</a>
                        <a href="#" className='text-p'>Careers</a>
                        <a href="#" className='text-p'>Faq's</a>
                    </div>
                    
                    <div className='flex flex-col gap-smallgap text-textmain'>
                        <p href="#" className='text-p font-bold'>Join us</p>
                        <a href="#" className='text-p'>Register as a driver</a>
                        <a href="#" className='text-p'>Register as a Rider</a>
                        <a href="#" className='text-p'>Register as a Vendor</a>
                    </div>
                </div>

                <hr className='w-full border-0 h-[1px] bg-[#919191]'/>

                <div className='flex gap-2 w-full between flex-wrap'>
                    <div className='flex gap-2 flex-wrap'>
                        <a href="#" className='text-p'>Cookies</a>
                        <a href="#" className='text-p'>Privacy</a>
                        <a href="#" className='text-p'>Terms and Conditions</a>
                    </div>

                    <p className='text-p text-textash text-center'>© 2025 GoRider.</p>
                </div>
            </section>
        </footer>
    )
}
