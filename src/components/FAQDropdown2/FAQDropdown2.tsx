import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'
import { useRef } from 'react'

function FAQDropdown2(props: any) {
    
    const textRef: any = useRef<HTMLElement>(null)
    const dialogRef: any = useRef<HTMLElement>(null)
    const iconRef: any = useRef<HTMLElement>(null)

    const handleClick = () => {
       const text = textRef.current
       const dialog = dialogRef.current
       const  icon = iconRef.current

       if ((!text.classList.contains('animate-faqanswerfadein') && !text.classList.contains('animate-faqanswerfadeout'))) {
            text.classList.add('animate-faqanswerfadein')
            text.classList.add('lg:animate-faqanswerfadeinlg')
            text.classList.add('xl:animate-faqanswerfadeinxl')
            text.classList.add('2xl:animate-faqanswerfadein2xl')

        }else{
            if(text.classList.contains('animate-faqanswerfadein')) {

                text.classList.remove('animate-faqanswerfadein')
                text.classList.remove('lg:animate-faqanswerfadeinlg')
                text.classList.remove('xl:animate-faqanswerfadeinxl')
                text.classList.remove('2xl:animate-faqanswerfadein2xl')



                text.classList.add('animate-faqanswerfadeout')
                text.classList.add('lg:animate-faqanswerfadeoutlg')
                text.classList.add('xl:animate-faqanswerfadeoutxl')
                text.classList.add('2xl:animate-faqanswerfadeout2xl')


            }else {

                text.classList.remove('animate-faqanswerfadeout')
                text.classList.remove('lg:animate-faqanswerfadeoutlg')
                text.classList.remove('xl:animate-faqanswerfadeoutxl')
                text.classList.remove('2xl:animate-faqanswerfadeout2xl')



                text.classList.add('animate-faqanswerfadein')
                text.classList.add('lg:animate-faqanswerfadeinlg')
                text.classList.add('xl:animate-faqanswerfadeinxl')
                text.classList.add('2xl:animate-faqanswerfadein2xl')
            }
        }

        if ((!dialog.classList.contains('animate-faqdialogactive') && !dialog.classList.contains('animate-faqdialoginactive'))) {
            dialog.classList.add('animate-faqdialogactive')
            dialog.classList.add('xl:animate-faqdialogactivexl')

        }else{
            if(dialog.classList.contains('animate-faqdialogactive')) {

                dialog.classList.remove('animate-faqdialogactive')
                dialog.classList.remove('xl:animate-faqdialogactivexl')

                dialog.classList.add('animate-faqdialoginactive')
                dialog.classList.add('xl:animate-faqdialoginactivexl')

            }else {

                dialog.classList.remove('animate-faqdialoginactive')
                dialog.classList.remove('xl:animate-faqdialoginactivexl')

                dialog.classList.add('animate-faqdialogactive')
                dialog.classList.add('xl:animate-faqdialogactivexl')

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

        
        if(icon.classList.contains('w-5')) {
            
            icon.classList.remove('w-5')
            icon.classList.remove('xl:w-6')

            icon.classList.add('w-6')
            icon.classList.add('xl:w-8')

            icon.src = minusIcon
        }else {

            icon.classList.remove('w-6')
            icon.classList.remove('xl:w-8')

            icon.classList.add('w-5')
            icon.classList.add('xl:w-6')


            icon.src = plusIcon
        }

    }
    return (
        <div className='rounded-xl xl:rounded-2xl bg-slate-200 mb-6 xl:mb-8 px-6 py-3 xl:px-8 xl:py-3 2xl:mb-10 2xl:py-4'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-sm lg:text-base 2xl:text-xl mr-4 xl:text-lg xl:mr-8'>{props.question}</p>
                {/* <p className='font-semibold text-sm mr-4 xl:text-2xl xl:mr-16'>{props.question}</p> */}
                <button onClick={handleClick}>
                    <img className='w-5 xl:w-6' src={plusIcon} alt="" ref={iconRef} />
                </button>
            </div>
            {/* <div className="mt-3 pr-8 mb-2" ref={dialogRef}> */}
            <div className="my-0 pr-8" ref={dialogRef}>
                {/* <p className="text-xs lg:text-sm text-slate-600" ref={textRef}>{props.answer}</p> */}
                <p className="text-[0rem] text-slate-600" ref={textRef}>{props.answer}</p>
            </div>
        </div>
    )
}

export default FAQDropdown2