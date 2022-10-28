function ServiceBox (props: any) {
    return (
        <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
            <img className='w-full object-cover object-center' src={props.image} alt=""/>
            <div className='w-full h-full bg-zinc-900/50 absolute top-0'></div>
            <p className='text-white font-bold text-4xl absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>{props.title}</p>
            <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-10 mt-14'>
            <p className='text-center text-white font-semibold text-lg'>{props.description}</p>
            </div>
        </div>
    )
}

export default ServiceBox