import { useState } from 'react'
import reactLogo from './assets/react.svg'
import jacketPic from './assets/jacket.png'
import radialBg1 from './assets/radial-bg-1.png'
import radialBg2 from './assets/radial-bg-2.png'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {

  return (
    <div className="App font-primary">
      <NavigationBar/>
      <section className='bg-zinc-900 flex justify-center pt-56 pb-20 relative'>
        <div className='absolute top-0 left-0'>
          <img src={radialBg1} alt="" />
        </div>
        <div className='absolute top-0 right-0'>
          <img src={radialBg2} alt="" />
        </div>
        <div className='w-4/5'>
          <div className='flex justify-between items-center'>
            <div className='w-1/2 mr-16'>
              <h1 className='text-5xl font-bold text-white leading-snug relative z-10'>Kini cetak desain <span className='text-primary'>Kaos</span> lebih <span className='underline decoration-4 underline-offset-8 decoration-primary'>mudah</span> dan <span className='underline decoration-4 underline-offset-8 decoration-primary'>simple</span> di Qlambi Studio.</h1>
              <h2 className='mt-6 font-semibold text-white text-xl tracking-wide'>
                Kami siap melayani pembuatan desain, sablon, kaos, celana, sweatshirt, hoodie, seragam, dll.
              </h2>
              <div className='flex font-semibold text-xl mt-12'>
                  <button className='bg-slate-800 rounded-full text-white w-6/12 py-3 px-3 mr-8'>Download Pricelist</button>
                  <button className='bg-primary rounded-full text-white w-6/12 py-3 px-3'>Pesan Sekarang</button>
              </div>
            </div>
            <div className='w-1/2 h-[30rem] ml-16 relative'>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] overflow-hidden absolute z-10'>
                <img className='w-full' src={jacketPic} alt="" />
              </div>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] absolute border-4 border-white bottom-0 right-0'>
              </div>
            </div>
          </div>
          <div className='flex mt-20'>
            <div className='mr-20'>
              <p className='text-4xl text-white font-semibold mb-1'>100+</p>
              <p className='text-white text-xl'>Produksi</p>
            </div>
            <div className='mr-20'>
              <p className='text-4xl text-white font-semibold mb-1'>50+</p>
              <p className='text-white text-xl'>Client</p>
            </div>
            <div>
              <p className='text-4xl text-white font-semibold mb-1'>100+</p>
              <p className='text-white text-xl'>Desain</p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-20 bg-zinc-800 pb-20'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white'>Layanan <span className='text-primary'>Kami</span></h1>
        </div>
      </section>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-red-400">Vite + React + Manuk + Ngaceng+ Bingity</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
