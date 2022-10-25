import { useState } from 'react'
import reactLogo from './assets/react.svg'
import jacketPic from './assets/jacket.png'
import radialBg1 from './assets/radial-bg-1.svg'
import radialBg2 from './assets/radial-bg-2.svg'
import radialBg3 from './assets/radial-bg-3.svg'
import dottedBg1 from './assets/dotted-bg-1.svg'
import radialBg4 from './assets/radial-bg-4.svg'
import qlambiLogo from './assets/qlambi-logo.svg'
import arrowIcon from './assets/arrow.svg'
import tiktokIcon from './assets/tiktok.svg'
import whatsappIcon from './assets/whatsapp.svg'
import instagramIcon from './assets/instagram.svg'

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
                <img className='w-full object-cover object-center' src={jacketPic} alt="" />
              </div>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] absolute border-4 border-white border-dashed bottom-0 right-0'>
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
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
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
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
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
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
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
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
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
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
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
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
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
        <div className='text-center mb-32'>
          <h1 className='text-white font-bold text-5xl'>Kenapa <span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>memilih</span> Qlambi Studio?</h1>
        </div>
        <div className='flex justify-center'>
          <div className='w-4/5 flex justify-between items-center'>
            <div className='w-1/2 mr-14'>
              <div>
                <div className='flex justify-between items-start'>
                  <div className='w-1/12 mr-3'>
                    <p className='text-4xl text-primary font-semibold'>01</p>
                  </div>
                  <div className='w-9/12 mr-3'>
                    <p className='text-4xl text-white font-semibold'>Produksi hanya 1 - 2 hari</p>
                  </div>
                  <div className='w-1/12 flex justify-start items-center'>
                    <img className='w-10 rotate-90' src={arrowIcon} alt="" />
                  </div>
                </div>
                <div className='mt-6'>
                  <div className='mx-auto w-9/12'>
                    <p className='text-2xl text-white'>Pakaianmu blabla blabla lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className='mt-14'>
                  <hr className='mx-auto w-9/12'/>
                </div>
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-start'>
                  <div className='w-1/12 mr-3'>
                    <p className='text-4xl text-primary font-semibold'>02</p>
                  </div>
                  <div className='w-9/12 mr-3'>
                    <p className='text-4xl text-white font-semibold'>Tanpa minimal order</p>
                  </div>
                  <div className='w-1/12 flex justify-start items-center'>
                    <img className='w-10' src={arrowIcon} alt="" />
                  </div>
                </div>
                {/* <div className='mt-6'>
                  <div className='mx-auto w-9/12'>
                    <p className='text-2xl text-white'>Kamu selalu diperbolehkan untuk memesan layanan kami walaupun jumlahnya satuan, ratusan atau ribuan sekalipun</p>
                  </div>
                </div> */}
                <div className='mt-14'>
                  <hr className='mx-auto w-9/12'/>
                </div>
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-start'>
                  <div className='w-1/12 mr-3'>
                    <p className='text-4xl text-primary font-semibold'>03</p>
                  </div>
                  <div className='w-9/12 mr-3'>
                    <p className='text-4xl text-white font-semibold'>Gratis Ongkir</p>
                  </div>
                  <div className='w-1/12 flex justify-start items-center'>
                    <img className='w-10' src={arrowIcon} alt="" />
                  </div>
                </div>
                {/* <div className='mt-6'>
                  <div className='mx-auto w-9/12'>
                    <p className='text-2xl text-white'>Kamu selalu diperbolehkan untuk memesan layanan kami walaupun jumlahnya satuan, ratusan atau ribuan sekalipun</p>
                  </div>
                </div> */}
                <div className='mt-14'>
                  <hr className='mx-auto w-9/12'/>
                </div>
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-start'>
                  <div className='w-1/12 mr-3'>
                    <p className='text-4xl text-primary font-semibold'>04</p>
                  </div>
                  <div className='w-9/12 mr-3'>
                    <p className='text-4xl text-white font-semibold'>Konsultasi Gratis</p>
                  </div>
                  <div className='w-1/12 flex justify-start items-center'>
                    <img className='w-10' src={arrowIcon} alt="" />
                  </div>
                </div>
                {/* <div className='mt-6'>
                  <div className='mx-auto w-9/12'>
                    <p className='text-2xl text-white'>Kamu selalu diperbolehkan untuk memesan layanan kami walaupun jumlahnya satuan, ratusan atau ribuan sekalipun</p>
                  </div>
                </div> */}
                <div className='mt-14'>
                  <hr className='mx-auto w-9/12'/>
                </div>
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-start'>
                  <div className='w-1/12 mr-3'>
                    <p className='text-4xl text-primary font-semibold'>05</p>
                  </div>
                  <div className='w-9/12 mr-3'>
                    <p className='text-4xl text-white font-semibold'>Desain sablon sesuai keinginanmu</p>
                  </div>
                  <div className='w-1/12 flex justify-start items-center'>
                    <img className='w-10' src={arrowIcon} alt="" />
                  </div>
                </div>
                {/* <div className='mt-6'>
                  <div className='mx-auto w-9/12'>
                    <p className='text-2xl text-white'>Kamu selalu diperbolehkan untuk memesan layanan kami walaupun jumlahnya satuan, ratusan atau ribuan sekalipun</p>
                  </div>
                </div> */}
                <div className='mt-14'>
                  <hr className='mx-auto w-9/12'/>
                </div>
              </div>
            </div>
            {/* <div className='w-1/2 ml-8 relative h-[60rem]'>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] overflow-hidden absolute z-10 top-0 left-0'>
                <img className='w-full object-cover object-center' src={jacketPic} alt="" />
              </div>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] absolute border-4 border-white bottom-[2rem] right-0'>
              </div>
            </div> */}
            <div className='w-1/2 ml-14 relative h-screen'>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] overflow-hidden absolute z-10 top-0 left-0'>
                <img className='w-full object-cover object-left' src={jacketPic} alt="" />
              </div>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] absolute border-4 border-white bottom-[2rem] right-0 border-dashed'>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-zinc-900 pt-28 pb-48'>
        <div className='w-4/5 mx-auto bg-primary rounded-2xl pb-4 pt-8 relative overflow-hidden'>
          <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <img className='object-cover object-center' src={radialBg4} alt="" />
          </div>
          <div className='mt-24 mb-14 relative z-10'>
            <h1 className='text-center text-5xl text-white font-semibold mb-10'>Tunggu apa lagi?</h1>
            <h2 className='text-center text-3xl text-white font-semibold'>Segera hubungi kami untuk mendapatkan informasi lebih lanjut.</h2>
            <div className='flex justify-center mt-12'>
              <button className='mx-auto px-28 text-primary text-xl font-semibold bg-white py-4 rounded-full'>Hubungi</button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black pt-20 pb-20'>
        <div className='text-center'>
          <h1 className='text-white text-5xl font-bold'>Frequently A<span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>sked Qu</span>estion (FAQ)</h1>
        </div>
      </section>
      <footer className='bg-zinc-900 pt-28 pb-16'>
        <div className='flex justify-center'>
          <div className='w-4/5 flex justify-between items-start'>
            <div className='w-1/3'>
              <div className='mb-8'>
                <img className="w-32" src={qlambiLogo} alt="" />
              </div>
              <div className='w-2/3'>
                <p className='text-white text-xl'>Qlambi studio adalah lorem ipsum dolor sir amet lara koei asiqq</p>
              </div>
            </div>
            <div className='w-1/3 ml-40'>
              <div className='mb-12'>
                <p className='text-white font-semibold text-xl'>Sosial Media</p>
              </div>
              <div className='flex items-center mb-6'>
                <div className='mr-4'>
                  <img className='w-7' src={instagramIcon} alt="" />
                </div>
                <div>
                  <p className='text-white text-xl'>Instagram</p>
                </div>
              </div>
              <div className='flex items-center mb-6'>
                <div className='mr-4'>
                  <img className='w-7' src={tiktokIcon} alt="" />
                </div>
                <div>
                  <p className='text-white text-xl'>Tiktok</p>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='mr-4'>
                  <img className='w-7' src={whatsappIcon} alt="" />
                </div>
                <div>
                  <p className='text-white text-xl'>Whatsapp</p>
                </div>
              </div>
            </div>
            <div className='w-1/3'>
              <div className='mb-12'>
                <p className='text-white font-semibold text-xl'>Alamat</p>
              </div>
              <div>
                <div className='mb-7'>
                  <p className='text-white text-xl'>+62 8 985 958 135</p>
                </div>
                <div className='mb-7'>
                  <p className='text-white text-xl'>Jalan Jagir Sidomukti 1 No.21, Jagir, Wonokromo, Kota Surabaya</p>
                </div>
                <div>
                  <p className='text-white text-xl'>qlambistudio@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-28'>
          <p className='text-white text-xl text-center'>&copy; 2022 Qlambi Studio</p>
        </div>
      </footer>
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
