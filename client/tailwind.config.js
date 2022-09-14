/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage :{
        'discordHero' : "url(../public/assets/discord.jpg')",
        'discord_background' : "url(../public/assets/discord_background.jpg')",
      },
      colors:{
        discord_background: "#404eed",
        discord_blue : "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
      },
    },
  },
  plugins: [],
}
