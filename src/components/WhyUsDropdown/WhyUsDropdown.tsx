
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

        if ((!dialog.classList.contains('animate-whydialogactive') && !dialog.classList.contains('animate-whydialoginactive'))) {
            dialog.classList.add('animate-whydialogactive')
            dialog.classList.add('2xl:animate-whydialogactive2xl')
            
        }else{
            if(dialog.classList.contains('animate-whydialogactive')) {

                dialog.classList.remove('animate-whydialogactive')
                dialog.classList.add('animate-whydialoginactive')

                dialog.classList.remove('2xl:animate-whydialogactive2xl')
                dialog.classList.add('2xl:animate-whydialoginactive2xl')
            }else {

                dialog.classList.remove('animate-whydialoginactive')
                dialog.classList.add('animate-whydialogactive')

                dialog.classList.remove('2xl:animate-whydialoginactive2xl')
                dialog.classList.add('2xl:animate-whydialogactive2xl')
            }
        }

        if ((!text.classList.contains('animate-whyanswerfadein') && !text.classList.contains('animate-whyanswerfadeout'))) {
            text.classList.add('animate-whyanswerfadein')
            text.classList.add('md:animate-whyanswerfadeinmd')
            text.classList.add('lg:animate-whyanswerfadeinlg')
            text.classList.add('xl:animate-whyanswerfadeinxl')
            text.classList.add('2xl:animate-whyanswerfadein2xl')


        }else{
            if(text.classList.contains('animate-whyanswerfadein')) {

                text.classList.remove('animate-whyanswerfadein')
                text.classList.add('animate-whyanswerfadeout')

                text.classList.remove('md:animate-whyanswerfadeinmd')
                text.classList.add('md:animate-whyanswerfadeoutmd')

                text.classList.remove('lg:animate-whyanswerfadeinlg')
                text.classList.add('lg:animate-whyanswerfadeoutlg')

                text.classList.remove('xl:animate-whyanswerfadeinxl')
                text.classList.add('xl:animate-whyanswerfadeoutxl')

                text.classList.remove('2xl:animate-whyanswerfadein2xl')
                text.classList.add('2xl:animate-whyanswerfadeout2xl')
            }else {

                text.classList.remove('animate-whyanswerfadeout')
                text.classList.add('animate-whyanswerfadein')

                text.classList.remove('md:animate-whyanswerfadeoutmd')
                text.classList.add('md:animate-whyanswerfadeinmd')

                text.classList.remove('lg:animate-whyanswerfadeoutlg')
                text.classList.add('lg:animate-whyanswerfadeinlg')

                text.classList.remove('xl:animate-whyanswerfadeoutxl')
                text.classList.add('xl:animate-whyanswerfadeinxl')

                text.classList.remove('2xl:animate-whyanswerfadeout2xl')
                text.classList.add('2xl:animate-whyanswerfadein2xl')
            }
        }
    }

    return (
        <div className='mb-3 md:mb-5 2xl:mb-8 mx-2 2xl:mx-0 '>
            <div className='flex justify-between items-start'>
                <div className='w-1/12 mr-3'>
                    <p className='text-base md:text-xl xl:text-2xl 2xl:text-3xl text-primary font-semibold'>{props.num}</p>
                </div>
                <div className='w-9/12 mr-3'>
                    <p className='text-base md:text-xl xl:text-2xl 2xl:text-3xl text-white font-semibold'>{props.title}</p>
                </div>
                <button className='w-2/12 2xl:w-1/12 flex justify-start items-center' onClick={handleClick}>
                    <img className="w-8 md:w-9 lg:w-8 ml-auto lg:ml-auto xl:mx-auto xl:w-9 2xl:w-10 2xl:ml-0 rotate-0" src={arrowIcon} alt="" ref={imageRef}/>
                </button>
            </div>
            <div className="2xl:pr-20 md:pr-10" ref={dialogRef}>
                <div className='ml-auto w-11/12 2xl:mx-auto 2xl:w-9/12'>
                    <p className='text-white mx-3 xl:mr-12 2xl:ml-1 2xl:mr-0 opacity-0 text-[0rem]' ref={textRef}>
                        {props.description}
                    </p>
                </div>
            </div>
            <div className='mt-6 md:mt-8 2xl:mt-14'>
                <hr className='mx-auto w-9/12 md:ml-14 md:w-[80%] lg:w-9/12 lg:ml-12 xl:ml-[3.3rem] 2xl:ml-20'/>
            </div>
        </div>
    )
}

export default WhyUsDropdown