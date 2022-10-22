/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          colors:{
            'tbliss': '#FC5B62',
            'tbliss2nd' : '#008489'
          }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "night"],
    },
}