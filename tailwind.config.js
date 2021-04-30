const colors = require('tailwindcss/colors')


module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'light': '#edefee',
            'accent': '#d08856',
            'secondAccent': ' #aa210f',
            'dark': '#41403c',
        },
        fontFamily: {
            'primary': ['Source Sans Pro', 'sans-serif'],
            'secondary': ['Source Code Pro', 'monospace'],
        },
        fontSize: {
            'h1': '3rem',
            'h2': '2.25rem',
            'h3': '1.25rem',
            'base': '1rem',
            'h1-md': '4.5rem',
            'h2-md': '3.75rem',
            'h3-md': '1.5rem',
            'base-md': '1.25rem',
        },
        lineHeight: {
            'base': '1.6'
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}