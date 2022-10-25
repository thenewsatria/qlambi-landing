import qlambiLogo from '../../assets/qlambi-logo.png'

function NavigationBar(){
    return (
        <nav className="bg-red-500 flex justify-center">
            <div className="w-4/5 flex justify-between items-center py-4">
                <div className='w-32'>
                    <img className='w-full' src={qlambiLogo} alt="" />
                </div>
                <div className="flex">
                    <div>
                        <p className="text-xl text-orange-500 text-bold">Beranda</p>
                    </div>
                    <div>
                        <p>Layanan</p>
                    </div>
                    <div>
                        <p>Portofolio</p>
                    </div>
                    <div>
                        <p>Tentang</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar