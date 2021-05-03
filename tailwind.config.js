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
            'headingHeight': '1.1'
        },
        extend: {
            colors: {
                'light': '#edefee',
                'accent': '#f59218',
                'secondAccent': ' #aa210f',
                'dark': '#41403c',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}