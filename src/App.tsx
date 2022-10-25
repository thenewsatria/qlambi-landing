import { useState } from 'react'
import reactLogo from './assets/react.svg'
import jacketPic from './assets/jacket.png'
import radialBg1 from './assets/radial-bg-1.png'
import radialBg2 from './assets/radial-bg-2.png'
import radialBg3 from './assets/radial-bg-3.png'
import dottedBg1 from './assets/dotted-bg-1.png'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {

  return (
    <div className="App font-primary">
      <NavigationBar/>
      <section className='bg-black flex justify-center pt-56 pb-20 relative'>
        <div className='absolute top-0 left-0'>
          <img className='w-160' src={radialBg1} alt="" />
        </div>
        <div className='absolute top-0 right-0'>
          <img className='w-128' src={radialBg2} alt="" />
        </div>
        <div className='w-4/5'>
          <div className='flex justify-between items-center'>
            <div className='w-1/2 mr-16'>
              <h1 className='text-5xl font-bold text-white leading-snug relative z-10'>Kini cetak desain <span className='text-primary'>Kaos</span> lebih <span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>mudah</span> dan <span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>simple</span> di Qlambi Studio.</h1>
              <h2 className='mt-6 font-semibold text-white text-xl tracking-wide relative z-10'>
                Kami siap melayani pembuatan desain, sablon, kaos, celana, sweatshirt, hoodie, seragam, dll.
              </h2>
              <div className='flex font-semibold text-xl mt-12'>
                  <button className='bg-slate-800 rounded-full text-white w-6/12 py-3 px-3 mr-8 relative z-10'>Download Pricelist</button>
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
      <section className='pt-20 bg-zinc-900 pb-40'>
        <div className='text-center pb-28'>
          <h1 className='text-5xl font-bold text-white'>Layanan <span className='text-primary'>Kami</span></h1>
        </div>
        <div className='flex justify-center relative'>
          <div className="absolute top-[4rem] left-[-1.2rem]">
            <img className="w-[25rem]" src={radialBg3} alt="" />
          </div>
          <div className="absolute bottom-[-3rem] right-[10rem]">
            <img src={dottedBg1} alt="" />
          </div>
          <div className='grid gap-20 grid-cols-3 grid-rows-2 auto-cols-max auto-rows-max w-9/12'>
            <div className='overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='object-none object-center' src={jacketPic} alt=""/>
              <div className='bg-black/75 px-10 pt-5 pb-6 absolute bottom-0'>
                <div className='text-center mb-4'>
                  <p className='text-white font-bold text-2xl'>Sablon</p>
                </div>
                <div className='text-center text-white font-semibold text-lg'>
                  <p>Sablon ini adalah sablon yang terbaik</p>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='object-none object-center' src={jacketPic} alt=""/>
              <div className='bg-black/75 px-10 pt-5 pb-6 absolute bottom-0'>
                <div className='text-center mb-4'>
                  <p className='text-white font-bold text-2xl'>Sablon</p>
                </div>
                <div className='text-center text-white font-semibold text-lg'>
                  <p>Sablon ini adalah sablon yang terbaik</p>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='object-none object-center' src={jacketPic} alt=""/>
              <div className='bg-black/75 px-10 pt-5 pb-6 absolute bottom-0'>
                <div className='text-center mb-4'>
                  <p className='text-white font-bold text-2xl'>Sablon</p>
                </div>
                <div className='text-center text-white font-semibold text-lg'>
                  <p>Sablon ini adalah sablon yang terbaik</p>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='object-none object-center' src={jacketPic} alt=""/>
              <div className='bg-black/75 px-10 pt-5 pb-6 absolute bottom-0'>
                <div className='text-center mb-4'>
                  <p className='text-white font-bold text-2xl'>Sablon</p>
                </div>
                <div className='text-center text-white font-semibold text-lg'>
                  <p>Sablon ini adalah sablon yang terbaik</p>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='object-none object-center' src={jacketPic} alt=""/>
              <div className='bg-black/75 px-10 pt-5 pb-6 absolute bottom-0'>
                <div className='text-center mb-4'>
                  <p className='text-white font-bold text-2xl'>Sablon</p>
                </div>
                <div className='text-center text-white font-semibold text-lg'>
                  <p>Sablon ini adalah sablon yang terbaik</p>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='object-none object-center' src={jacketPic} alt=""/>
              <div className='bg-black/75 px-10 pt-5 pb-6 absolute bottom-0'>
                <div className='text-center mb-4'>
                  <p className='text-white font-bold text-2xl'>Sablon</p>
                </div>
                <div className='text-center text-white font-semibold text-lg'>
                  <p>Sablon ini adalah sablon yang terbaik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black pt-20 pb-20'>
        <div className='text-center'>
          <h1 className='text-white font-bold text-5xl'>Kenapa <span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>memilih</span> Qlambi Studio?</h1>
        </div>
        <div className='flex justify-center'>
          <div className='w-9/12 flex justify-between'>
            <div className='w-1/2'>

            </div>
            <div className='w-1/2'>

            </div>
          </div>
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
