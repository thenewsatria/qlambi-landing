
import { useRef } from 'react';
import arrowIcon from '../../assets/arrow-right.svg'

function WhyUsDropdown (props: any) {
    const imageRef: any = useRef<HTMLElement>(null)
    const dialogRef: any = useRef<HTMLElement>(null)
    const textRef: any = useRef<HTMLElement>(null)

    const handleClick = () => {
        const image = imageRef.current
        const dialog = dialogRef.current
        const text = textRef.current

        if ((!image.classList.contains('animate-arrowrotate') && !image.classList.contains('animate-arrowunrotate'))) {
            image.classList.add('animate-arrowrotate')
        }else{
            if(image.classList.contains('animate-arrowrotate')) {

                image.classList.remove('animate-arrowrotate')
                image.classList.add('animate-arrowunrotate')
            }else {

                image.classList.remove('animate-arrowunrotate')
                image.classList.add('animate-arrowrotate')
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

        if ((!text.classList.contains('animate-whyanswerfadein') && !text.classList.contains('animate-whyanswerfadeout'))) {
            text.classList.add('animate-whyanswerfadein')
        }else{
            if(text.classList.contains('animate-whyanswerfadein')) {

                text.classList.remove('animate-whyanswerfadein')
                text.classList.add('animate-whyanswerfadeout')
            }else {

                text.classList.remove('animate-whyanswerfadeout')
                text.classList.add('animate-whyanswerfadein')
            }
        }
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
                    <img className="w-10 rotate-0" src={arrowIcon} alt="" ref={imageRef}/>
                </button>
            </div>
            <div className="pr-20" ref={dialogRef}>
                <div className='mx-auto w-9/12'>
                    <p className='text-white ml-3 opacity-0 text-[0rem]' ref={textRef}>
                        {props.description}
                    </p>
                </div>
            </div>
            <div className='mt-14'>
                <hr className='mx-auto w-9/12'/>
            </div>
        </div>
    )
}

export default WhyUsDropdown