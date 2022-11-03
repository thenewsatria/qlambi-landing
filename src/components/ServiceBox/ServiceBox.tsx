function ServiceBox (props: any) {
    return (
        <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[15rem] md:h-[19rem] lg:h-[17rem] xl:h-[20.5rem] 2xl:h-[23rem]'>
            <img className='w-full h-full object-cover object-center' src={props.image} alt=""/>
            <div className='w-full h-full absolute top-0'></div>
            <p className='text-white font-bold text-xl md:text-2xl 2xl:text-3xl absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>{props.title}</p>
            <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-8 md:px-10 lg:px-5 xl:px-10 2xl:px-10 mt-8 2xl:mt-14'>
                <p className='text-center text-white font-semibold text-xs md:text-sm xl:text-base'>{props.description}</p>
            </div>
        </div>
    )
}

export default ServiceBox