import { LegacyRef, RefObject, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import jacketPic from './assets/jacket.png'
import radialBg1 from './assets/radial-bg-1.svg'
import radialBg2 from './assets/radial-bg-2.svg'
import radialBg3 from './assets/radial-bg-3.svg'
import dottedBg1 from './assets/dotted-bg-1.svg'
import radialBg4 from './assets/radial-bg-4.svg'
import qlambiLogo from './assets/qlambi-logo.svg'
import tiktokIcon from './assets/tiktok.svg'
import whatsappIcon from './assets/whatsapp.svg'
import instagramIcon from './assets/instagram.svg'
import arrowIcon from './assets/arrow.svg'


import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import FAQDropdown from './components/FAQdropdown/FAQDropdown'
import WhyUsDropdown from './components/WhyUsDropdown/WhyUsDropdown'

function App() {
  const mainSections = new Map<string, any> ([
    ['beranda', useRef<HTMLElement>(null)],
    ['layanan', useRef<HTMLElement>(null)],
    ['tentang', useRef<HTMLElement>(null)]
  ])

  const activeNavRef = new Map<string, any> ([
    ['beranda', useRef<HTMLElement>(null)],
    ['layanan', useRef<HTMLElement>(null)],
    ['tentang', useRef<HTMLElement>(null)]
  ])

  const navigationHightlight = () => {
      let currentPos: number = window.scrollY;

      mainSections.forEach((section, key) => {
        const sectionHeight: number = section.current?.offsetHeight
        const sectionTop: number = section.current?.offsetTop - 50
        const currentActiveLink = activeNavRef.get(key).current
         
        if (currentActiveLink != null) {
          if (currentPos > sectionTop && currentPos <= sectionTop + sectionHeight) {
            currentActiveLink.classList.add("animate-navbaractive")
            currentActiveLink.classList.remove("animate-navbarinactive")
          }else{
            if (currentActiveLink.classList.contains('animate-navbaractive')){
              currentActiveLink.classList.add("animate-navbarinactive")
            }
            currentActiveLink.classList.remove("animate-navbaractive")
          }
        }
        
      })
  }
  
  window.addEventListener("scroll", navigationHightlight);
  window.addEventListener("load", navigationHightlight)

  const faqs = {
    'left': [
      {
        'question':'Apakah bisa sablon satuan?',
        'answer':'Tentu, kamu bisa pesan sablon tanpa minimum pemesanan.'
      },
      {
        'question':'Apa jenis sablon yang digunakan?',
        'answer':'Kami memproduksi dengan jenis sablon DTF (Direct to Film).'
      },
      {
        'question':'Berapa biaya cetak kaosnya?',
        'answer':'Biaya sablon kami mulai dari harga 10.000 rupiah saja.'
      },
    ],
    'right': [
      {
        'question':'Apakah bisa dikirim luar kota?',
        'answer':'Tentu bisa, kami melayani pengiriman untuk seluruh Indonesia ya.'
      },
      {
        'question':'Berapa lama waktu produksi?',
        'answer':'Waktu produksi kami hanya berkisar antara 1-2 hari saja.'
      },
      {
        'question':'Apakah produksi bisa dalam jumlah banyak?',
        'answer':'Sangat bisa. Tentunya dengan harga yang jauh lebih murah.'
      },
    ]
  }

  const whys = [
    {
      "num": "01",
      "title": "Produksi hanya 1 - 2 hari",
      "description": "Dengan proses produksi yang singkat, kami dapat memenuhi kebutuhan pesanan kamu tanpa harus menunggu lama." 
    },
    {
      "num": "02",
      "title": "Tanpa minimal order",
      "description": "Kamu bisa pesan mulai 1 pcs juga tanpa ada minimal warna sablon" 
    },
    {
      "num": "03",
      "title": "Gratis Ongkir",
      "description": "Kami akan berikan gratis ongkir untuk kamu yang ada di Pulau Jawa dengan minimal pemesanan 30 pcs" 
    },
    {
      "num": "04",
      "title": "Konsultasi Gratis",
      "description": "Gak perlu bingung untuk menentukan desain sablon dan pakaianmu. Konsultasikan saja kepada kami!" 
    },
    {
      "num": "05",
      "title": "Desain sablon sesuai keinginanmu",
      "description": "Desain sablon semaumu, kami siap realisasikan semuanya" 
    },
  ]

  return (
    <div className="App font-primary">
      <NavigationBar>
        <div className='mr-10 text-primary' ref={activeNavRef.get('beranda')}>
            <a className="cursor-pointer" href='#beranda'>Beranda</a>
        </div>
        <div className='mr-10 text-white' ref={activeNavRef.get('layanan')}> 
            <a className="cursor-pointer" href='#layanan'>Layanan</a>
        </div>
        <div className='mr-10 text-white'>
            <a className="cursor-pointer" href='#portofolio'>Portofolio</a>
        </div>
        <div className='mr-10 text-white' ref={activeNavRef.get('tentang')}>
            <a className="cursor-pointer" href='#tentang'>Tentang</a>
        </div>
      </NavigationBar>
      
      <section className='bg-black flex justify-center pt-56 pb-20 relative' id='beranda' ref={mainSections.get('beranda')}>
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
      <section className='pt-20 bg-zinc-900 pb-40' id='layanan' ref={mainSections.get('layanan')}>
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
            <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
              <div className='w-full h-full bg-zinc-900/50 absolute top-0'></div>
              <p className='text-white font-bold text-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>Sablon</p>
              <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-10 mt-14'>
                <p className='text-center text-white font-semibold text-lg'>Realisasikan karyamu melalui sablon dengan hasil cetak kualitas tinggi.</p>
              </div>
            </div>
            <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
              <div className='w-full h-full bg-zinc-900/50 absolute top-0'></div>
              <p className='text-white font-bold text-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>Desain</p>
              <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-10 mt-14'>
                <p className='text-center text-white font-semibold text-lg'>Dengan desainer profesional, kami siap membantumu untuk mendapatkan ide-ide yang sangat menarik.</p>
              </div>
            </div>
            <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
              <div className='w-full h-full bg-zinc-900/50 absolute top-0'></div>
              <p className='text-white font-bold text-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>Kaos</p>
              <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-10 mt-14'>
                <p className='text-center text-white font-semibold text-lg'>Terbuat dari bahan kualitas tinggi, memberikan kenyamanan untuk kamu yang memakainya.</p>
              </div>
            </div>
            <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
              <div className='w-full h-full bg-zinc-900/50 absolute top-0'></div>
              <p className='text-white font-bold text-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>Totebag</p>
              <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-10 mt-14'>
                <p className='text-center text-white font-semibold text-lg'>Desain totebag yang <span className='italic'>up-to-date</span> menyempurnakan tampilanmu menjadi lebih keren.</p>
              </div>
            </div>
            <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
              <div className='w-full h-full bg-zinc-900/50 absolute top-0'></div>
              <p className='text-white font-bold text-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>Celana</p>
              <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-10 mt-14'>
                <p className='text-center text-white font-semibold text-lg'>Terbuat dari material terbaik sehingga nyaman untuk digunakan sehari-hari.</p>
              </div>
            </div>
            <div className='group overflow-hidden rounded-3xl relative border-2 border-white h-[27rem]'>
              <img className='w-full object-cover object-center' src={jacketPic} alt=""/>
              <div className='w-full h-full bg-zinc-900/50 absolute top-0'></div>
              <p className='text-white font-bold text-4xl absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:animate-riseabit animate-setabit'>Hoodie</p>
              <div className='absolute top-100 group-hover:animate-riseandfadein animate-setandfadeout w-full px-10 mt-14'>
                <p className='text-center text-white font-semibold text-lg'>Pilihan koleksi hoodie siap memberikan tampilanmu jauh lebih casual dan modis.</p>
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
              {
                whys.map((reason) => (
                  <WhyUsDropdown num={reason.num} title={reason.title} description={reason.description} key={reason.num} />
                ))
              }
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
      {/* Tunggu Apa Lagi? Section */}
      <section className='bg-zinc-900 pt-28 pb-48'>
        <div className='w-4/5 mx-auto bg-primary rounded-2xl pb-4 pt-8 relative overflow-hidden'>
          <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <img className='object-cover object-center animate-spin' src={radialBg4} alt="" />
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
      {/* FAQ section */}
      <section className='bg-black pt-20 pb-20'>
        <div className='text-center mb-32'>
          <h1 className='text-white text-5xl font-bold'>Frequently A<span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>sked Qu</span>estion (FAQ)</h1>
        </div>
        <div className='w-9/12 mx-auto flex justify-between items-start'>
          <div className='w-1/2 mr-10'>
            {faqs.left.map((faq, id) => (
              <FAQDropdown question={faq.question} answer={faq.answer} key={id} />
            ))}
          </div>
          <div className='w-1/2 ml-10'>
            {faqs.right.map((faq, id) => (
              <FAQDropdown question={faq.question} answer={faq.answer} key={id} />
            ))}
          </div>
        </div>
      </section>
      <footer className='bg-zinc-900 pt-28 pb-16' id='tentang' ref={mainSections.get('tentang')}>
        <div className='flex justify-center'>
          <div className='w-4/5 flex justify-between items-start'>
            <div className='w-1/3'>
              <div className='mb-8'>
                <img className="w-32" src={qlambiLogo} alt="" />
              </div>
              <div className='w-10/12'>
                <p className='text-white text-xl'>Qlambi studio hadir untuk memberikan solusi berkualitas dan kemudahan dalam urusan desain, sablon, kaos dan sebagainya.</p>
              </div>
            </div>
            <div className='w-1/3 ml-64'>
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
    </div>
  )
}

export default App
