import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'
import { useEffect, useRef, useState } from 'react'

function FAQDropdown(props: any) {
    const [isActive, setActive] = useState(false)
    const prevState = useRef<boolean>(false)
    

    const textRef: any = useRef<HTMLElement>(null)
    const dialogRef: any = useRef<HTMLElement>(null)
    const iconRef: any = useRef<HTMLElement>(null)

    useEffect(() => {
        prevState.current = isActive;
    }, [isActive])

    // const handleClick = () => {
    //     setActive(!prevState.current)
    // }

    const handleClick = () => {
       const text = textRef.current
       const dialog = dialogRef.current
       const  icon = iconRef.current

       if ((!text.classList.contains('animate-faqanswerfadein') && !text.classList.contains('animate-faqanswerfadeout'))) {
            text.classList.add('animate-faqanswerfadein')
        }else{
            if(text.classList.contains('animate-faqanswerfadein')) {

                text.classList.remove('animate-faqanswerfadein')
                text.classList.add('animate-faqanswerfadeout')
            }else {

                text.classList.remove('animate-faqanswerfadeout')
                text.classList.add('animate-faqanswerfadein')
            }
        }

        if ((!dialog.classList.contains('animate-faqdialogactive') && !dialog.classList.contains('animate-faqdialoginactive'))) {
            dialog.classList.add('animate-faqdialogactive')
        }else{
            if(dialog.classList.contains('animate-faqdialogactive')) {

                dialog.classList.remove('animate-faqdialogactive')
                dialog.classList.add('animate-faqdialoginactive')
            }else {

                dialog.classList.remove('animate-faqdialoginactive')
                dialog.classList.add('animate-faqdialogactive')
            }
        }

        // if ((!icon.classList.contains('w-10') && !icon.classList.contains('w-8'))) {
        //     icon.classList.add('w-10')
        //     icon.src = minusIcon
        // }else{
        //     if(icon.classList.contains('w-10')) {

        //         icon.classList.remove('w-10')
        //         icon.classList.add('w-8')
        //         icon.src = plusIcon
        //     }else {

        //         icon.classList.remove('w-8')
        //         icon.classList.add('w-10')
        //         icon.src = minusIcon
        //     }
        // }

        
        if(icon.classList.contains('w-8')) {
            
            icon.classList.remove('w-8')
            icon.classList.add('w-10')
            icon.src = minusIcon
        }else {

            icon.classList.remove('w-10')
            icon.classList.add('w-8')
            icon.src = plusIcon
        }

    }
    return (
        <div className='rounded-xl xl:rounded-3xl bg-slate-200 mb-12 px-6 py-3 xl:px-12 xl:py-6'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-sm mr-4 xl:text-2xl xl:mr-16'>{props.question}</p>
                <button onClick={handleClick}>
                    <img className='w-5 xl:w-8' src={plusIcon} alt="" ref={iconRef} />
                </button>
            </div>
            <div className="xl:pr-20" ref={dialogRef}>
                <p className="text-[0rem] opacity-0" ref={textRef}>{props.answer}</p>
            </div>
        </div>
    )
}

export default FAQDropdown