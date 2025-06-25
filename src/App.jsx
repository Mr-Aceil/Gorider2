import React from 'react'
import Header from './Components/Header'
import Section1 from './Components/section1'
import Section2 from './Components/section2' 
import Section3 from './Components/section3'
import Section4 from './Components/section4'
import Fotter from './Components/Fotter'
import Faq from './Components/FAQ'

export default function App() {
    return (
        <>
        <div className="flex flex-col jcenter icenter bg-[url('./assets/HomeImages/Bg.png')] bg-center bg-no-reapeat bg-cover ">
            <Header />
            <Section1 />
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Faq />
        <Fotter />
        </>
    )
}
