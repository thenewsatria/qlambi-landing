/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // primary: '#C81C28',
                primary: '#FF024C',
                secondary: '#000000',
                tertiary: '#121212',
            },
            fontFamily: {
                primary: ['"Poppins"', 'sans-serif']
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
            },
            keyframes: {
                riseabit: {
                    from: {top: '75%'},
                    to: {top: '50%'}
                },
                setabit: {
                    from: {top: '50%'},
                    to: {top: '75%'}
                },
                riseandfadein: {
                    from: {top: '100%', opacity:'0%'},
                    to: {top: '50%', opacity:'100%'},
                },
                setandfadeout: {
                    from: {top: '50%', opacity:'100%'},
                    to: {top: '100%', opacity:'0%'},
                },
                faqdialogactive: {
                    from: {padding: '0rem 2rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                    to: {padding: '0rem 2rem 0rem 0rem', margin:'.75rem 0rem .5rem 0rem'},

                },
                faqdialoginactive: {
                    from: {padding: '0rem 2rem 0rem 0rem', margin:'.75rem 0rem .5rem 0rem'},
                    to: {padding: '0rem 2rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                },
                faqdialogactivexl: {
                    from: {padding: '0rem 3.5rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                    to: {padding: '0rem 3.5rem 0rem 0rem', margin:'1.25rem 0rem 1.5rem 0rem'},
                },
                faqdialoginactivexl: {
                    from: {padding: '0rem 3.5rem 0rem 0rem', margin:'1.25rem 0rem 1.5rem 0rem'},
                    to: {padding: '0rem 3.5rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                },
                fadein: {
                    from: {opacity:'0%', fontSize:"0rem"},
                    to: {opacity:'100%', fontSize:"1.25rem"},
                },
                fadeinnew: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:".75rem"},
                    "50%": {opacity:'0%', fontSize:".75rem"},
                    "75%": {opacity:'50%', fontSize:".75rem"},
                    "100%": {opacity:'100%', fontSize:".75rem"},
                },
                fadeinnewlg: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:".875rem"},
                    "50%": {opacity:'0%', fontSize:".875rem"},
                    "75%": {opacity:'50%', fontSize:".875rem"},
                    "100%": {opacity:'100%', fontSize:".875rem"},
                },
                fadeinnewxl: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:".95rem"},
                    "50%": {opacity:'0%', fontSize:".95rem"},
                    "75%": {opacity:'50%', fontSize:".95rem"},
                    "100%": {opacity:'100%', fontSize:".95rem"},
                },
                fadeinnew2xl: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:"1.125rem"},
                    "50%": {opacity:'0%', fontSize:"1.125rem"},
                    "75%": {opacity:'50%', fontSize:"1.125rem"},
                    "100%": {opacity:'100%', fontSize:"1.125rem"},
                },
                fadeout: {
                    from: {opacity:'100%', fontSize:"1.25rem"},
                    to: {opacity:'0%', fontSize:"0rem"},
                },
                fadeoutnew: {
                    "0%": {opacity:'100%', fontSize:".75rem"},
                    "25%": {opacity:'50%', fontSize:".75rem"},
                    "50%": {opacity:'0%', fontSize:".75rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },fadeoutnewlg: {
                    "0%": {opacity:'100%', fontSize:".875rem"},
                    "25%": {opacity:'50%', fontSize:".875rem"},
                    "50%": {opacity:'0%', fontSize:".875rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                fadeoutnewxl: {
                    "0%": {opacity:'100%', fontSize:".95rem"},
                    "25%": {opacity:'50%', fontSize:".95rem"},
                    "50%": {opacity:'0%', fontSize:".95rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                fadeoutnew2xl: {
                    "0%": {opacity:'100%', fontSize:"1.125rem"},
                    "25%": {opacity:'50%', fontSize:"1.125rem"},
                    "50%": {opacity:'0%', fontSize:"1.125rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                whydialogactive: {
                    from: {padding: '0rem 2rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                    to: {padding: '0rem 2rem 0rem 0rem', margin:'.75rem 0rem .5rem 0rem'},

                },
                whydialoginactive: {
                    from: {padding: '0rem 2rem 0rem 0rem', margin:'.75rem 0rem .5rem 0rem'},
                    to: {padding: '0rem 2rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                },
                whydialogactive2xl: {
                    from: {padding: '0rem 2rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                    to: {padding: '0rem 2rem 0rem 0rem', margin:'1.5rem 0rem .5rem 0rem'},

                },
                whydialoginactive2xl: {
                    from: {padding: '0rem 2rem 0rem 0rem', margin:'1.5rem 0rem .5rem 0rem'},
                    to: {padding: '0rem 2rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                },
                whyfadein: {
                    from: {opacity:'0%', fontSize:"0rem"},
                    to: {opacity:'100%', fontSize:"1.5rem"},
                },
                whyfadeout: {
                    from: {opacity:'100%', fontSize:"1.5rem"},
                    to: {opacity:'0%', fontSize:"0rem"},
                },
                whyfadeinnew: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:".825rem"},
                    "50%": {opacity:'0%', fontSize:".825rem"},
                    "75%": {opacity:'50%', fontSize:".825rem"},
                    "100%": {opacity:'100%', fontSize:".825rem"},
                },
                whyfadeoutnew: {
                    "0%": {opacity:'100%', fontSize:".825rem"},
                    "25%": {opacity:'50%', fontSize:".825rem"},
                    "50%": {opacity:'0%', fontSize:".825rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                whyfadeinnewmd: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:"1rem"},
                    "50%": {opacity:'0%', fontSize:"1rem"},
                    "75%": {opacity:'50%', fontSize:"1rem"},
                    "100%": {opacity:'100%', fontSize:"1rem"},
                },
                whyfadeoutnewmd: {
                    "0%": {opacity:'100%', fontSize:"1rem"},
                    "25%": {opacity:'50%', fontSize:"1rem"},
                    "50%": {opacity:'0%', fontSize:"1rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                whyfadeinnewlg: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:".925rem"},
                    "50%": {opacity:'0%', fontSize:".925rem"},
                    "75%": {opacity:'50%', fontSize:".925rem"},
                    "100%": {opacity:'100%', fontSize:".925rem"},
                },
                whyfadeoutnewlg: {
                    "0%": {opacity:'100%', fontSize:".925rem"},
                    "25%": {opacity:'50%', fontSize:".925rem"},
                    "50%": {opacity:'0%', fontSize:".925rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                whyfadeinnewxl: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:"1rem"},
                    "50%": {opacity:'0%', fontSize:"1rem"},
                    "75%": {opacity:'50%', fontSize:"1rem"},
                    "100%": {opacity:'100%', fontSize:"1rem"},
                },
                whyfadeoutnewxl: {
                    "0%": {opacity:'100%', fontSize:"1rem"},
                    "25%": {opacity:'50%', fontSize:"1rem"},
                    "50%": {opacity:'0%', fontSize:"1rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                whyfadeinnew2xl: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:"1.25rem"},
                    "50%": {opacity:'0%', fontSize:"1.25rem"},
                    "75%": {opacity:'50%', fontSize:"1.25rem"},
                    "100%": {opacity:'100%', fontSize:"1.25rem"},
                },
                whyfadeoutnew2xl: {
                    "0%": {opacity:'100%', fontSize:"1.25rem"},
                    "25%": {opacity:'50%', fontSize:"1.25rem"},
                    "50%": {opacity:'0%', fontSize:"1.25rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                rotate0to90: {
                    from: {transform: "rotate(0deg)"},
                    to: {transform: "rotate(90deg)"},
                },
                rotate90to0: {
                    from: {transform: "rotate(90deg)"},
                    to: {transform: "rotate(0deg)"},
                },
                navbaractive: {
                    from: {color: "rgb(255 255 255)"},
                    to: {color: "#FF024C"},
                },
                navbarinactive: {
                    from: {color: "#FF024C"},
                    to: {color: "rgb(255 255 255)"},
                },
                navbarscrolled: {
                    from: {backdropFilter: "blur(0)", backgroundColor: 'transparent'},
                    to: {backdropFilter: "blur(16px)", backgroundColor: 'rgba(0,0,0,0.6)'},
                },
                navbarunscrolled: {
                    from: {backdropFilter: "blur(16px)", backgroundColor: 'rgba(0,0,0,0.6)'},
                    to: {backdropFilter: "blur(0)", backgroundColor: 'transparent'},
                },
                slider1: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-30.75rem)"}
                },
                slider2: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-51.25rem)"}
                },
                slider1md: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-51rem)"}
                },
                slider2md: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-85rem)"}
                },
                slider1lg: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-67.5rem)"}
                },
                slider2lg: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-112.5rem)"}
                },
                slider1xl: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-49.5rem)"}
                },
                slider2xl: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-82.5rem)"}
                },
                slider12xl: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-61.5rem)"}
                },
                slider22xl: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-102.5rem)"}
                }
                // inlinehidden: {
                //     from: {display: 'inline'},
                //     to: {display: 'none'}
                // },
                // inlineshow: {
                //     from: {display: 'none'},
                //     to: {display: 'inline'}
                // }
            },
            animation: {
                riseabit: 'riseabit 0.3s ease-in-out forwards',
                setabit: 'setabit 0.3s ease-in-out forwards',
                riseandfadein: 'riseandfadein 0.3s ease-in-out forwards',
                setandfadeout: 'setandfadeout 0.3s ease-in-out forwards',
                faqdialogactive: 'faqdialogactive .8s ease-in-out forwards',
                faqdialoginactive: 'faqdialoginactive .8s ease-in-out forwards',
                faqdialogactivexl: 'faqdialogactivexl .8s ease-in-out forwards',
                faqdialoginactivexl: 'faqdialoginactivexl .8s ease-in-out forwards',
                faqanswerfadein: 'fadeinnew 0.5s ease-in-out forwards',
                faqanswerfadeout: 'fadeoutnew 0.5s ease-in-out forwards',
                faqanswerfadeinlg: 'fadeinnewlg 0.5s ease-in-out forwards',
                faqanswerfadeoutlg: 'fadeoutnewlg 0.5s ease-in-out forwards',
                faqanswerfadeinxl: 'fadeinnewxl 0.5s ease-in-out forwards',
                faqanswerfadeoutxl: 'fadeoutnewxl 0.5s ease-in-out forwards',
                faqanswerfadein2xl: 'fadeinnew2xl 0.5s ease-in-out forwards',
                faqanswerfadeout2xl: 'fadeoutnew2xl 0.5s ease-in-out forwards',
                whydialogactive: 'whydialogactive 1s ease-in-out forwards',
                whydialoginactive: 'whydialoginactive 1s ease-in-out forwards',
                whydialogactive2xl: 'whydialogactive2xl 1s ease-in-out forwards',
                whydialoginactive2xl: 'whydialoginactive2xl 1s ease-in-out forwards',
                whyanswerfadein: 'whyfadeinnew 0.7s ease-in-out forwards',
                whyanswerfadeout: 'whyfadeoutnew 0.7s ease-in-out forwards',
                whyanswerfadeinmd: 'whyfadeinnewmd 0.7s ease-in-out forwards',
                whyanswerfadeoutmd: 'whyfadeoutnewmd 0.7s ease-in-out forwards',
                whyanswerfadeinlg: 'whyfadeinnewlg 0.7s ease-in-out forwards',
                whyanswerfadeoutlg: 'whyfadeoutnewlg 0.7s ease-in-out forwards',
                whyanswerfadeinxl: 'whyfadeinnewxl 0.7s ease-in-out forwards',
                whyanswerfadeoutxl: 'whyfadeoutnewxl 0.7s ease-in-out forwards',
                whyanswerfadein2xl: 'whyfadeinnew2xl 0.7s ease-in-out forwards',
                whyanswerfadeout2xl: 'whyfadeoutnew2xl 0.7s ease-in-out forwards',
                arrowrotate: 'rotate0to90 0.4s ease-in-out forwards',
                arrowunrotate: 'rotate90to0 0.4s ease-in-out forwards',
                navbaractive: "navbaractive 0.3s ease-in-out forwards",
                navbarinactive: "navbarinactive 0.3s ease-in-out forwards",
                navbarscrolled: "navbarscrolled 0.3s ease-in-out forwards",
                navbarunscrolled: "navbarunscrolled 0.3s ease-in-out forwards",
                portofolioslider1: "slider1 15s linear infinite",
                portofolioslider2: "slider2 12s linear infinite",
                portofolioslider1md: "slider1md 15s linear infinite",
                portofolioslider2md: "slider2md 12s linear infinite",
                portofolioslider1lg: "slider1lg 15s linear infinite",
                portofolioslider2lg: "slider2lg 12s linear infinite",
                portofolioslider1xl: "slider1xl 15s linear infinite",
                portofolioslider2xl: "slider2xl 12s linear infinite",
                portofolioslider12xl: "slider12xl 12s linear infinite",
                portofolioslider22xl: "slider22xl 12s linear infinite",
                // faqanswerhide: 'inlinehidden 0.1s ease-in-out 0.5s forwards',
                // faqanswershow: 'inlineshow 0.1s ease-in-out forwards'
            },
            transitionProperty: {
                'height': 'height',
                'width': 'width',
                'spacing': 'margin, padding',
                'margin': 'margin',
                'padding': 'padding'
            }
        },
    },
    plugins: [],
}