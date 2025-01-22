let dotenv = require('dotenv').config() 
dotenv = process.env
const baseUrl = dotenv.PROD_ENV === 'dev' ? dotenv.DEV_URL : dotenv.LIVE_URL
async function ping(){
  let time = 100 * 10 * 60 * 14
  if(dotenv.PROD_ENV === 'PROD'){
    const fetcher = async () => {
      await fetch(baseUrl)
      console.log('pinging',baseUrl)
    }
    fetcher()
    setInterval(fetcher, time)
  }
}
module.exports = {
  dotenv, ping
}