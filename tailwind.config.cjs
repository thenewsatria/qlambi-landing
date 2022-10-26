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
                    from: {padding: '0rem 0rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                    to: {padding: '0rem 5rem 0rem 0rem', margin:'1.5rem 0rem 2.5rem 0rem'},
                },
                faqdialoginactive: {
                    from: {padding: '0rem 5rem 0rem 0rem', margin:'1.5rem 0rem 2.5rem 0rem'},
                    to: {padding: '0rem 0rem 0rem 0rem', margin:'0rem 0rem 0rem 0rem'},
                },
                fadein: {
                    from: {opacity:'0%', fontSize:"0rem"},
                    to: {opacity:'100%', fontSize:"1.25rem"},
                },
                fadeout: {
                    from: {opacity:'100%', fontSize:"1.25rem"},
                    to: {opacity:'0%', fontSize:"0rem"},
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
                rotate0to90: {
                    from: {transform: "rotate(0deg)"},
                    to: {transform: "rotate(90deg)"},
                },
                rotate90to0: {
                    from: {transform: "rotate(90deg)"},
                    to: {transform: "rotate(0deg)"},
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
                faqdialogactive: 'faqdialogactive 0.3s ease-in-out forwards',
                faqdialoginactive: 'faqdialoginactive 0.3s ease-in-out forwards',
                faqanswerfadein: 'fadein 0.3s ease-in-out forwards',
                faqanswerfadeout: 'fadeout 0.3s ease-in-out forwards',
                whydialogactive: 'whydialogactive 0.3s ease-in-out forwards',
                whydialoginactive: 'whydialoginactive 0.3s ease-in-out forwards',
                whyanswerfadein: 'whyfadein 0.3s ease-in-out forwards',
                whyanswerfadeout: 'whyfadeout 0.3s ease-in-out forwards',
                arrowrotate: 'rotate0to90 0.3s ease-in-out forwards',
                arrowunrotate: 'rotate90to0 0.3s ease-in-out forwards',
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