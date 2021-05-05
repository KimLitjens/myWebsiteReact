// const colors = require('tailwindcss/colors')
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'primary': ['Source Sans Pro', 'sans-serif'],
            'secondary': ['Source Code Pro', 'monospace'],
        },
        lineHeight: {
            'base': '1.6',
            'headingHeight': '1'
        },
        extend: {
            colors: {
                'light': '#edefee',
                'accent': '#f59218',
                'secondAccent': ' #aa210f',
                'dark': '#41403c',
            },
            // width: {
            //     'subIntro': 'calc(100% + 1.5em)'
            // },
            backgroundImage: theme => ({
                'work1Img': 'url("./img/work1.jpg")',
                'work2Img': 'url("./img/work2.jpg")',
                'work3Img': 'url("./img/work3.jpg")',
            }),
            screens: {
                'md': '800px'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}