import { MagnifyingGlassPlus } from "phosphor-react"

import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'
import { GameBanner } from "./components/GameBanner"
import { CreateAdsBanner } from "./components/CreateAdBanner"

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo Nlw eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl="/game-1.png" title="League of legends" adsCount={5}/>
        <GameBanner bannerUrl="/game-2.png" title="Dota 2" adsCount={5}/>
        <GameBanner bannerUrl="/game-3.png" title="CS - Go" adsCount={5}/>
        <GameBanner bannerUrl="/game-4.png" title="Apex Legends" adsCount={5}/>
        <GameBanner bannerUrl="/game-5.png" title="Fortine" adsCount={5}/>
        <GameBanner bannerUrl="/game-6.png" title="World of warcraft" adsCount={5}/>

      </div>

      <CreateAdsBanner />
    </div>
  )
}

export default App
