import qlambiLogo from '../../assets/qlambi-logo.svg'

function NavigationBar(){
    return (
        <nav className="bg-transparent w-screen flex justify-center fixed z-20">
            <div className="w-11/12 flex justify-between items-center py-6">
                <div className='w-32'>
                    <img className='w-full' src={qlambiLogo} alt="" />
                </div>
                <div className="flex text-xl font-bold">
                    <div className='mr-10 text-primary'>
                        <p className="">Beranda</p>
                    </div>
                    <div className='mr-10 text-white'> 
                        <p>Layanan</p>
                    </div>
                    <div className='mr-10 text-white'>
                        <p>Portofolio</p>
                    </div>
                    <div className='mr-10 text-white'>
                        <p>Tentang</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar