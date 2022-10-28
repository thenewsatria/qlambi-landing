/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF024C'
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
                    from: {padding: '0rem 5rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                    to: {padding: '0rem 5rem 0rem 0rem', margin:'1.5rem 0rem 2.5rem 0rem'},
                },
                faqdialoginactive: {
                    from: {padding: '0rem 5rem 0rem 0rem', margin:'1.5rem 0rem 2.5rem 0rem'},
                    to: {padding: '0rem 5rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                },
                fadein: {
                    from: {opacity:'0%', fontSize:"0rem"},
                    to: {opacity:'100%', fontSize:"1.25rem"},
                },
                fadeinnew: {
                    "0%": {opacity:'0%', fontSize:"0rem"},
                    "25%": {opacity:'0%', fontSize:"1.25rem"},
                    "50%": {opacity:'0%', fontSize:"1.25rem"},
                    "75%": {opacity:'50%', fontSize:"1.25rem"},
                    "100%": {opacity:'100%', fontSize:"1.25rem"},
                },
                fadeout: {
                    from: {opacity:'100%', fontSize:"1.25rem"},
                    to: {opacity:'0%', fontSize:"0rem"},
                },
                fadeoutnew: {
                    "0%": {opacity:'100%', fontSize:"1.25rem"},
                    "25%": {opacity:'50%', fontSize:"1.25rem"},
                    "50%": {opacity:'0%', fontSize:"1.25rem"},
                    "75%": {opacity:'0%', fontSize:"0rem"},
                    "100%": {opacity:'0%', fontSize:"0rem"},
                },
                whydialogactive: {
                    from: {margin:'0rem 0rem 0rem 0rem'},
                    to: {margin:'1.5rem 0rem 0rem 0rem'},
                },
                whydialoginactive: {
                    from: {margin:'1.5rem 0rem 0rem 0rem'},
                    to: {margin:'0rem 0rem 0rem 0rem'},
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
                    "25%": {opacity:'0%', fontSize:"1.5rem"},
                    "50%": {opacity:'0%', fontSize:"1.5rem"},
                    "75%": {opacity:'50%', fontSize:"1.5rem"},
                    "100%": {opacity:'100%', fontSize:"1.5rem"},
                },
                whyfadeoutnew: {
                    "0%": {opacity:'100%', fontSize:"1.5rem"},
                    "25%": {opacity:'50%', fontSize:"1.5rem"},
                    "50%": {opacity:'0%', fontSize:"1.5rem"},
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
                    to: { transform: "translateX(-45rem)"}
                },
                slider2: {
                    from: { transform: "translateX(0)"},
                    to: { transform: "translateX(-112.5rem)"}
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
                faqanswerfadein: 'fadeinnew 0.5s ease-in-out forwards',
                faqanswerfadeout: 'fadeoutnew 0.5s ease-in-out forwards',
                whydialogactive: 'whydialogactive 1s ease-in-out forwards',
                whydialoginactive: 'whydialoginactive 1s ease-in-out forwards',
                whyanswerfadein: 'whyfadeinnew 0.7s ease-in-out forwards',
                whyanswerfadeout: 'whyfadeoutnew 0.7s ease-in-out forwards',
                arrowrotate: 'rotate0to90 0.4s ease-in-out forwards',
                arrowunrotate: 'rotate90to0 0.4s ease-in-out forwards',
                navbaractive: "navbaractive 0.3s ease-in-out forwards",
                navbarinactive: "navbarinactive 0.3s ease-in-out forwards",
                navbarscrolled: "navbarscrolled 0.3s ease-in-out forwards",
                navbarunscrolled: "navbarunscrolled 0.3s ease-in-out forwards",
                portofolioslider1: "slider1 5s linear infinite",
                portofolioslider2: "slider2 12s linear infinite",
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