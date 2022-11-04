import { useEffect, useRef, useState } from 'react'
import qlambiLogo from '../../assets/qlambi-logo.svg'

function NavigationBar(props: any){
    const navbar: any = useRef<HTMLElement>(null)

    const changeNavbarColor = () => {
        let currentPos: number = window.scrollY;
        if (navbar.current != null) {
            if (currentPos > 50) {
                navbar.current.classList.add("animate-navbarscrolled")
                navbar.current.classList.remove("animate-navbarunscrolled")
            }else{
                if (navbar.current.classList.contains('animate-navbarscrolled')){
                    navbar.current.classList.add("animate-navbarunscrolled")
                }
                navbar.current.classList.remove("animate-navbarscrolled")
            }
        }
    }

    window.addEventListener('scroll', changeNavbarColor)
    window.addEventListener('load', changeNavbarColor)

    return (
        <nav className="w-screen hidden lg:flex justify-center fixed z-20 rounded-bl-[20rem]" ref={navbar}>
            <div className="w-11/12 flex justify-between items-center py-6">
                <div className='w-24 xl:w-20 2xl:w-28'>
                    <img className='w-full' src={qlambiLogo} alt="" />
                </div>
                <div className="flex text-base 2xl:text-lg font-semibold">
                    {props.children}
                </div>
            </div>
        </nav>
        // <nav className="bg-green-500/50 w-screen flex justify-center fixed z-20">
        //     <div className="w-11/12 flex justify-between items-center py-6 relative">
        //         <div className='w-32 h-32 rounded-full absolute top-0 bg-green-500/50'>
        //             <img className='w-3/4 h-full mx-auto my-auto' src={qlambiLogo} alt="" />
        //         </div>
        //         <div className="flex text-xl font-bold ml-auto">
        //             {props.children}
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavigationBar