
import { useEffect, useRef, useState } from 'react';
import arrowIcon from '../../assets/arrow.svg'

function WhyUsDropdown (props: any) {
    const [isActive, setActive] = useState(false)
    const prevState = useRef<boolean>(false)
    
    useEffect(() => {
        prevState.current = isActive;
    }, [isActive])

    const handleClick = () => {
        setActive(!prevState.current)
    }

    return (
        <div className='mb-8'>
            <div className='flex justify-between items-start'>
                <div className='w-1/12 mr-3'>
                    <p className='text-4xl text-primary font-semibold'>{props.num}</p>
                </div>
                <div className='w-9/12 mr-3'>
                    <p className='text-4xl text-white font-semibold'>{props.title}</p>
                </div>
                <button className='w-1/12 flex justify-start items-center' onClick={handleClick}>
                    <img className={isActive ? 'w-10 animate-arrowrotate': 'w-10 animate-arrowunrotate'} src={arrowIcon} alt="" />
                </button>
            </div>
            <div className={isActive? 'animate-faqdialogactive' : 'animate-faqdialoginactive'}>
                <div className='mx-auto w-9/12'>
                    <p className={isActive? 'text-white animate-whyanswerfadein ml-3' : 'text-white animate-whyanswerfadeout ml-3'}>{props.description}</p>
                </div>
            </div>
            <div className='mt-14'>
                <hr className='mx-auto w-9/12'/>
            </div>
        </div>
    )
}

export default WhyUsDropdown