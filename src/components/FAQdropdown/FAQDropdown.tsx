import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'
import { useEffect, useRef, useState } from 'react'

function FAQDropdown(props: any) {
    const [isActive, setActive] = useState(false)
    const prevState = useRef<boolean>(false)
    
    useEffect(() => {
        prevState.current = isActive;
    }, [isActive])

    const handleClick = () => {
        setActive(!prevState.current)
    }
    return (
        <div className='rounded-3xl bg-slate-200 mb-12 px-12 py-6 group'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-2xl mr-16'>{props.question}</p>
                <button onClick={handleClick}>
                    {isActive?
                        <img className='w-10' src={minusIcon} alt="" />
                        :
                        <img className='w-8' src={plusIcon} alt="" />
                    }
                </button>
            </div>
            {/* {isActive?
                <div className='mt-6 pr-20 mb-10 transition-margin'>
                    <p className='text-xl'>{props.answer}</p>
                </div>: null
            } */}
            <div className={isActive? 'animate-faqdialogactive' : 'animate-faqdialoginactive'}>
                <p className={isActive? 'animate-faqanswerfadein' : 'animate-faqanswerfadeout'}>{props.answer}</p>
                {/* <p className={isActive? 'text-xl h-auto': 'text-xl h-0'}>{props.answer}</p> */}
            </div>
            {/* <div className='mt-0 pr-0 mb-0 group-hover:mt-6 group-hover:pr-20 group-hover:mb-10 transition-all duration-300'>
                <p className='text-[0px] opacity-0 group-hover:opacity-100 group-hover:text-xl transition-all duration-300'>{props.answer}</p>
            </div> */}
            {/* <div className='animate-faqdialoginactive group-hover:animate-faqdialogactive'>
                <p className='animate-faqanswerfadeout group-hover:animate-faqanswerfadein'>{props.answer}</p>
            </div> */}
        </div>
    )
}

export default FAQDropdown