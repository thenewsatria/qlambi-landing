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
            }
        },
    },
    plugins: [],
}