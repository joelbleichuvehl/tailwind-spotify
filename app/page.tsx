import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />

        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>

            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-10'>
            <a className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer group'>
              <Image width={100} height={100} src='/album1.jpeg' alt={'Ámbum 1'} />
              <strong>Playlist 1</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible  group-hover:visible hover:scale-110'>
                <Play className='fill-black' />
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer group'>
              <Image width={100} height={100} src='/album2.jpeg' alt={'Ámbum 2'} />
              <strong>Playlist 1</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-110'>
                <Play className='fill-black' />
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer group'>
              <Image width={100} height={100} src='/album3.jpeg' alt={'Ámbum 3'} />
              <strong>Playlist 1</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-110'>
                <Play className='fill-black' />
              </button>
            </a>

            <a className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer group'>
              <Image width={100} height={100} src='/album2.jpeg' alt={'Ámbum 2'} />
              <strong>Playlist 1</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-110'>
                <Play className='fill-black' />
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer group'>
              <Image width={100} height={100} src='/album3.jpeg' alt={'Ámbum 3'} />
              <strong>Playlist 1</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-110'>
                <Play className='fill-black' />
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer group'>
              <Image width={100} height={100} src='/album1.jpeg' alt={'Ámbum 1'} />
              <strong>Playlist 1</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-110'>
                <Play className='fill-black' />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-3xl mt-10'>Made for You</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col'>
              <Image className='w-full' width={100} height={100} src='/album3.jpeg' alt={'Ámbum 3'} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col'>
              <Image className='w-full' width={100} height={100} src='/album1.jpeg' alt={'Ámbum 3'} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col'>
              <Image className='w-full' width={100} height={100} src='/album2.jpeg' alt={'Ámbum 3'} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col'>
              <Image className='w-full' width={100} height={100} src='/album3.jpeg' alt={'Ámbum 3'} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col'>
              <Image className='w-full' width={100} height={100} src='/album1.jpeg' alt={'Ámbum 3'} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
