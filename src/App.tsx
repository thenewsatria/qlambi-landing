import {useEffect, useRef} from 'react'
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

import service1 from './assets/service1.png'
import service2 from './assets/service2.png'
import service3 from './assets/service3.png'
import service4 from './assets/service4.png'
import service5 from './assets/service5.png'
import service6 from './assets/service6.png'

import testimoni1 from './assets/testimoniImg1.png'
import testimoni2 from './assets/testimoniImg2.png'
import avatarMale from './assets/avatar-male.svg'
import avatarFemale from './assets/avatar-female.svg'

import arrowRight from './assets/arrow-right.svg'
import arrowLeft from './assets/arrow-left.svg'

import desain1 from './assets/desain1.png'
import desain2 from './assets/desain2.png'
import desain3 from './assets/desain3.png'
import desain4 from './assets/desain4.png'
import desain5 from './assets/desain5.png'

import sablon1 from './assets/porto_sablon1.png'
import sablon2 from './assets/porto_sablon2.png'
import sablon3 from './assets/porto_sablon3.png'

import whyUs from './assets/whyUs.png'

import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import WhyUsDropdown from './components/WhyUsDropdown/WhyUsDropdown'
import ServiceBox from './components/ServiceBox/ServiceBox'
import TestimoniCard from './components/TestimoniCard/TestimoniCard'
import FAQDropdown2 from './components/FAQDropdown2/FAQDropdown2'

function App() {
  const mainSections = new Map<string, any> ([
    ['beranda', useRef<HTMLElement>(null)],
    ['layanan', useRef<HTMLElement>(null)],
    ['portofolio', useRef<HTMLElement>(null)],
    ['tentang', useRef<HTMLElement>(null)]
  ])
  
  const activeNavRef = new Map<string, any> ([
    ['beranda', useRef<HTMLElement>(null)],
    ['layanan', useRef<HTMLElement>(null)],
    ['portofolio', useRef<HTMLElement>(null)],
    ['tentang', useRef<HTMLElement>(null)]
  ])

  const scrollableTestimoni: any = useRef<HTMLElement>(null)
  const testimoniCard: any = useRef<HTMLElement>(null)
  
  const testimoniButtonHandler = (direction: string) => {
    const testimoniCardLength = testimoniCard.current.offsetWidth
    const testimoniStyle = window.getComputedStyle(testimoniCard.current)
    const scrollAmount: number = testimoniCardLength + parseFloat(testimoniStyle.getPropertyValue('margin-right'))

    if (direction == 'left') {
      scrollableTestimoni.current.scrollLeft -= scrollAmount
    }else if (direction == 'right') {
      scrollableTestimoni.current.scrollLeft += scrollAmount
    }
  }
  
  const handleNavbarClick = (e: any, sectionName: string) => {
    e.preventDefault()
    const scrollPos = mainSections.get(sectionName).current.offsetTop
    window.scrollTo({
      top: scrollPos,
      behavior: 'smooth'
    })
  }
  
  const navigationHightlight = () => {
    let currentPos: number = window.scrollY;
    
    mainSections.forEach((section, key) => {
      const sectionHeight: number = section.current?.offsetHeight
      const sectionTop: number = section.current?.offsetTop - 50
      const currentActiveLink = activeNavRef.get(key).current
         
      if (currentPos > sectionTop && currentPos <= sectionTop + sectionHeight) {
          currentActiveLink.classList.add("animate-navbaractive")
          currentActiveLink.classList.remove("animate-navbarinactive")
        }else{
          if (currentActiveLink.classList.contains('animate-navbaractive')){
            currentActiveLink.classList.add("animate-navbarinactive")
          }
          currentActiveLink.classList.remove("animate-navbaractive")
        }
      })
    }
    
  // run once after mounted
  useEffect(() => {
    navigationHightlight()
    window.addEventListener("scroll", navigationHightlight);
  }, [])
  
  const services = [
    {
      img: service1,
      serviceName: "Sablon",
      serviceDesc: "Realisasikan karyamu melalui sablon dengan hasil cetak kualitas tinggi."
    },
    {
      img: service2,
      serviceName: "Desain",
      serviceDesc: "Dengan desainer profesional, kami siap membantumu untuk mendapatkan ide-ide yang sangat menarik."
    },
    {
      img: service3,
      serviceName: "Kaos",
      serviceDesc: "Terbuat dari bahan kualitas tinggi, memberikan kenyamanan untuk kamu yang memakainya."
    },
    {
      img: service4,
      serviceName: "Totebag",
      serviceDesc: "Desain totebag yang up-to-date menyempurnakan tampilanmu menjadi lebih keren."
    },
    {
      img: service5,
      serviceName: "Celana",
      serviceDesc: "Terbuat dari material terbaik sehingga nyaman untuk digunakan sehari-hari."
    },
    {
      img: service6,
      serviceName: "Hoodie",
      serviceDesc: "Pilihan koleksi hoodie siap memberikan tampilanmu jauh lebih casual dan modis."
    }]

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
        'question':'Apakah bisa dikirim ke luar kota?',
        'answer':'Tentu bisa, kami melayani pengiriman untuk seluruh Indonesia ya.'
      },
      {
        'question':'Berapa lama waktu produksi?',
        'answer':'Waktu produksi kami hanya berkisar antara 1-2 hari saja.'
      },
      {
        'question':'Apakah bisa produksi dalam jumlah besar?',
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

  const testimonis = [
    {
      testimoni: "Yang paling saya suka juga admin nya ramah dan mau dengerin apa yang kita mau. Paling bener bikin desain di sini , next repeat order kesini lagi ka untuk produk aku selanjut nya 👍🏻",
      userImg: testimoni1,
      userName: "Frb Clothes",
      userCompany: "Brand Clothing",
      
    },
    {
      testimoni: "Sablonnya bagus dan awet, dicuci nggak luntur disetrika juga nggak nempel nempel. Qlambi studio mantappp",
      userImg: testimoni2,
      userName: "KPP Pratama Surabaya Mulyorejo",
      userCompany: null,
    },
    {
      testimoni: "Pengerjaan sat set sat set dan rasio price to performancenya sangat tinggi, jadi bisa dibilang sangat-sangat worth it",
      userImg: avatarMale,
      userName: "Yakob Hidayat",
      userCompany: "ASN",
    },
    {
      testimoni: "Over all bagus kak, kainnya adem bahannya tebel tapi ga bikin panas, untuk bahan sablonnya good.",
      userImg: avatarFemale,
      userName: "Karina Putri",
      userCompany: "Pelajar",
    }
  ]

  console.log('rendering')
  return (
    <div className="App font-primary">
      <NavigationBar>
        <div className='mr-10 text-primary' ref={activeNavRef.get('beranda')}>
            <a className="cursor-pointer" href='#beranda' onClick={(e) => handleNavbarClick(e, 'beranda')}>Beranda</a>
        </div>
        <div className='mr-10 text-white' ref={activeNavRef.get('layanan')}> 
            <a className="cursor-pointer" href='#layanan' onClick={(e) => handleNavbarClick(e, 'layanan')}>Layanan</a>
        </div>
        <div className='mr-10 text-white' ref={activeNavRef.get('portofolio')}>
            <a className="cursor-pointer" href='#portofolio' onClick={(e) => handleNavbarClick(e, 'portofolio')}>Portofolio</a>
        </div>
        <div className='mr-10 text-white' ref={activeNavRef.get('tentang')}>
            <a className="cursor-pointer" href='#tentang' onClick={(e) => handleNavbarClick(e, 'tentang')}>Tentang</a>
        </div>
        {/* <p className='text-white font-semibold'>{testiScrollX}</p> */}
      </NavigationBar>
      
      {/* Beranda Section */}
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
            <div className='w-1/2 h-[50rem] ml-16 relative'>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] overflow-hidden absolute z-10'>
                <img className='w-full object-cover object-center' src={jacketPic} alt="" />
              </div>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] absolute border-4 border-white border-dashed bottom-0 right-0'>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Layanan Section */}
      <section className='pt-20 bg-zinc-900 pb-20 2xl:pb-40' id='layanan' ref={mainSections.get('layanan')}>
        <div className='text-center mb-20 2xl:mb-28'>
          <h1 className='font-bold text-white text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl'>Layanan <span className='text-primary'>Kami</span></h1>
        </div>
        <div className='flex justify-center relative'>
          <div className="absolute top-[4rem] left-[-1.2rem]">
            <img className="w-[25rem]" src={radialBg3} alt="" />
          </div>
          <div className="absolute bottom-[-3rem] right-[10rem]">
            <img src={dottedBg1} alt="" />
          </div>
          <div className='grid gap-10 grid-cols-1 w-4/6 md:gap-10 md:grid-cols-2 md:w-5/6 lg:w-5/6 lg:grid-cols-3 lg:gap-8 xl:gap-10 2xl:gap-14 2xl:grid-cols-3 2xl:grid-rows-2 auto-cols-max auto-rows-max 2xl:w-9/12'>
            {services.map((val, key) => ( 
              <ServiceBox image={val.img} title={val.serviceName} description={val.serviceDesc} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* Why us Section */}
      <section className='bg-black pt-20 pb-20'>
        <div className='text-center mb-20 md:mb-36 lg:mb-28 mx-10 2xl:mx-0'>
          <h1 className='text-white font-bold text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl'>Kenapa <span className='text-primary'>memilih</span> Qlambi Studio?</h1>
        </div>
        <div className='flex justify-center'>
          <div className='w-5/6 flex flex-col lg:flex-row lg:justify-between lg:items-center'>
            <div className='w-full md:w-10/12 md:mx-auto lg:w-1/2 lg:mr-7 xl:mr-10 2xl:mr-14 order-last lg:order-none'>
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
            <div className='w-5/6 md:w-6/12 lg:w-1/2 mx-auto lg:ml-7 xl:ml-10 2xl:ml-14 relative h-[24rem] md:h-[30rem] lg:h-[38rem] xl:h-[45rem~] 2xl:h-screen mb-20 lg:mb-0'>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] overflow-hidden absolute z-10 top-0 left-0'>
                <img className='w-full object-cover object-left' src={whyUs} alt="" />
              </div>
              <div className='w-11/12 h-[90%] rounded-2xl rounded-tl-[8rem] absolute border-4 border-white bottom-[1rem] lg:bottom-[1.5rem] right-0 border-dashed'>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portofolio Section */}
      <section className='bg-zinc-900 pt-20 pb-20' id='portofolio' ref={mainSections.get('portofolio')}>
        <div className='w-5/6 mx-auto flex flex-col xl:flex-row justify-between items-center'>
          <div className='w-full mb-20 2xl:mb-0 xl:w-5/12 xl:mr-24'>
            <div>
              <h1 className='text-primary font-semibold text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl mb-5'>Portofolio</h1>
              <h2 className='text-white font-semibold text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl mb-8'>Ide dan solusi dari kami untuk pelanggan kami. 😊</h2>
              <h3 className='text-white text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-xl'>Kami berikan yang terbaik dan untuk pelanggan pelanggan kami.</h3>
              <div className='mt-12 flex justify-center xl:justify-start xl:items-center xl:mt-16'>
                <button className='text-white bg-primary font-semibold px-10 md:px-12 xl:px-10 2xl:px-12 py-3 text-sm md:text-base lg:text-lg xl:text-base 2xl:text-lg rounded-full'>Download Katalog Portofolio</button>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-7/12 flex flex-col'>
            <div className='w-full overflow-hidden mb-8 md:mb-12 xl:mb-16'>
              <div className='w-full flex flex-nowrap animate-portofolioslider1 md:animate-portofolioslider1md lg:animate-portofolioslider1lg xl:animate-portofolioslider1xl 2xl:animate-portofolioslider12xl'>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                  w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                  bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden hover:scale-'>
                  <img className='object-cover object-center w-full' src={sablon1} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl
                 w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                 bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={sablon2} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={sablon3} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={sablon1} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={sablon2} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={sablon3} alt="" />
                </div>
              </div>
            </div>
            <div className='w-full overflow-hidden'>
              <div className='w-full flex flex-nowrap animate-portofolioslider2 md:animate-portofolioslider2md lg:animate-portofolioslider2lg xl:animate-portofolioslider2xl 2xl:animate-portofolioslider22xl'>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain1} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain2} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain3} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain4} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain5} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain1} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain2} alt="" />
                </div>
                <div className='rounded-tr-[2.7rem]  rounded-bl-[2.7rem] rounded-tl-xl rounded-br-xl 
                w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72
                bg-zinc-900 flex-[0_0_auto] mr-5 md:mr-8 lg:mr-10 overflow-hidden'>
                  <img className='object-cover object-center w-full' src={desain3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimoni Section */}
      <section className='bg-black pt-20 pb-20'>
        <div className='w-5/6 mx-auto'>
          <div>
            <h1 className='text-primary font-semibold text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl mb-5'>Testimoni Kami</h1>
            <h2 className='text-white font-semibold text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl'>Apa kata pelanggan kami?</h2>
          </div>
          <div className='mt-20 2xl:mt-10'>
            <div className='flex justify-end'>
              <div className='mr-2 cursor-pointer rounded-full' onClick={() => testimoniButtonHandler('left')}>
                <img className='w-12' src={arrowLeft} alt="" />
              </div>
              <div className='ml-2 cursor-pointer rounded-full' onClick={() => testimoniButtonHandler('right')}>
                <img className='w-12' src={arrowRight} alt="" />
              </div>
            </div>
            <div className='mt-12 2xl:mt-20'>
              <div className='w-full overflow-x-scroll hidden-scroll scroll-smooth' ref={scrollableTestimoni} >
                <div className='w-full flex flex-nowrap oveflow-x-auto'>
                  {
                    testimonis.map((testimoni, key) => (
                      <TestimoniCard 
                        userImg={testimoni.userImg} 
                        userName={testimoni.userName} 
                        userCompany={testimoni.userCompany} 
                        testimoni={testimoni.testimoni} 
                        key={key} ref={testimoniCard}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tunggu Apa Lagi? Section */}
      <section className='bg-zinc-900 pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-14 lg:pb-14 xl:pt-20 xl:pb-32 2xl:pt-28 2xl:pb-36'>
        <div className='w-5/6 mx-auto bg-primary rounded-lg pt-6 md:pt-10 2xl:rounded-2xl pb-5 md:pb-7 xl:pb-12 2xl:pt-8 relative overflow-hidden'>
          <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10/12 md:w-auto'>
            <img className='object-cover object-center animate-spin' src={radialBg4} alt="" />
          </div>
          <div className='px-6 md:px-12 2xl:px-24 lg:mt-5 xl:mt-10 2xl:mt-20 2xl:mb-5 relative z-10'>
            <h1 className='text-center text-xl md:text-3xl lg:text-4xl xl:text-3xl text-white font-semibold mb-4 md:mb-8 xl:mb-10 2xl:text-5xl 2xl:mb-16'>Tunggu apa lagi?</h1>
            <h2 className='text-center text-xs md:text-base lg:text-lg xl:text-lg 2xl:text-2xl text-white font-semibold'>Segera hubungi kami untuk mendapatkan informasi lebih lanjut.</h2>
            <div className='flex justify-center mt-4 md:mt-6 xl:mt-8 2xl:mt-10'>
              <button className='text-xs md:text-base lg:text-base py-2 px-10 md:px-12 mx-auto 2xl:px-20 text-primary 2xl:text-xl font-semibold bg-white 2xl:py-4 rounded-full'>Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className='bg-black pt-20 pb-20'>
        <div className='text-center mb-20 xl:mb-32'>
          <h1 className='text-white text-3xl lg:text-4xl font-bold xl:hidden'>Frequently Asked Question <span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>(FAQ)</span></h1>
          <h1 className='text-white text-3xl 2xl:text-4xl font-bold hidden xl:inline'>Frequently A<span className='underline decoration-4 underline-offset-[1rem] decoration-primary'>sked Qu</span>estion (FAQ)</h1>
        </div>
        <div className='w-5/6 md:w-10/12 xl:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-start'>
          <div className='w-full md:w-1/2 md:mr-3 lg:mr-4 xl:mr-8'>
            {faqs.left.map((faq, id) => (
              <FAQDropdown2 question={faq.question} answer={faq.answer} key={id} />
            ))}
          </div>
          <div className='w-full md:w-1/2 md:ml-3 lg:ml-4 xl:ml-8'>
            {faqs.right.map((faq, id) => (
              <FAQDropdown2 question={faq.question} answer={faq.answer} key={id} />
            ))}
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className='bg-zinc-900 pt-20 md:pt-28 pb-16' id='tentang' ref={mainSections.get('tentang')}>
        <div className='flex justify-center'>
          <div className='w-5/6 flex flex-col lg:flex-row justify-between items-start'>
            <div className='mb-20 lg:w-1/3 lg:mb-0'>
              <div className='mb-6 lg:mb-8'>
                <img className="w-28 md:w-32 xl:w-28 2xl:w-36" src={qlambiLogo} alt="" />
              </div>
              <div className='w-11/12 md:w-8/12 lg:w-8/12 lg:w-10/12'>
                <p className='text-white text-base md:text-lg lg:text-base 2xl:text-lg'>
                  Qlambi studio hadir untuk memberikan solusi berkualitas dan kemudahan dalam urusan desain, sablon, kaos dan sebagainya.
                </p>
              </div>
            </div>
            <div className='mb-20 lg:mb-0 lg:w-1/3 lg:flex lg:flex-col lg:items-center'>
              <div>
                <div className='mb-8 lg:mb-12'>
                  <p className='text-white font-semibold text-lg 2xl:text-xl'>Sosial Media</p>
                </div>
                <div className='flex items-center mb-4 lg:mb-8'>
                  <div className='mr-4'>
                    <img className='w-5 md:w-7 lg:w-5 2xl:w-7' src={instagramIcon} alt="" />
                  </div>
                  <div>
                    <p className='text-white text-base md:text-lg lg:text-base 2xl:text-lg'>Instagram</p>
                  </div>
                </div>
                <div className='flex items-center mb-4 lg:mb-8'>
                  <div className='mr-4'>
                    <img className='w-5 md:w-7 lg:w-5 2xl:w-7' src={tiktokIcon} alt="" />
                  </div>
                  <div>
                    <p className='text-white text-base md:text-lg lg:text-base 2xl:text-lg'>Tiktok</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='mr-4'>
                    <img className='w-5 md:w-7 lg:w-5 2xl:w-7' src={whatsappIcon} alt="" />
                  </div>
                  <div>
                    <p className='text-white text-base md:text-lg lg:text-base 2xl:text-lg'>Whatsapp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 lg:ml-5 xl:ml-7'>
              <div>
                <div className='mb-8 lg:mb-12'>
                  <p className='text-white font-semibold text-lg 2xl:text-xl'>Alamat</p>
                </div>
                <div>
                  <div className='mb-5 xl:mb-8'>
                    <p className='text-white text-base md:text-lg lg:text-base'>+62 8 985 958 135</p>
                  </div>
                  <div className='mb-5 xl:mb-8'>
                    <p className='text-white text-base md:text-lg lg:text-base'>Jalan Jagir Sidomukti 1 No.21, Jagir, Wonokromo, Kota Surabaya</p>
                  </div>
                  <div>
                    <p className='text-white text-base md:text-lg lg:text-base'>qlambistudio@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-28'>
          <p className='text-white text-base md:text-lg lg:text-base text-center 2xl:text-lg'>&copy; 2022 Qlambi Studio</p>
        </div>
      </footer>
    </div>
  )
}

export default App
