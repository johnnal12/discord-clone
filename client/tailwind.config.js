/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        discord_blue : "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
      },
    },
  },
  plugins: [],
}
