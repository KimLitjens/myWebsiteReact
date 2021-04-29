module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            'light': '#edefee',
            'accent': '#d08856',
            'third': ' #aa210f',
            'dark': '#41403c',

        }),
        fontFamily: {
            'primary': ['Source Sans Pro', 'sans-serif'],
            'secondary': ['Source Code Pro', 'monospace'],
        },
        fontSize: {
            'h1': '3rem',
            'h2': '2.25rem',
            'h3': '1.25rem',
            'base': '1rem',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}