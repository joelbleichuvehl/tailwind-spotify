import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop,
  Laptop2,
  Volume,
  Maximize,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className='bg-zinc-800 border-t border-zinc-700 p-6  flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Image width={56} height={56} src='/album2.jpeg' alt={'Ámbum 3'} />
        <div className='flex flex-col'>
          <strong className='font-normal'>Rope</strong>
          <span className='text-xs text-zinc-400'>Foo Fighters</span>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <Shuffle size={20} className='text-zinc-200' />
          <SkipBack size={20} className='text-zinc-200' />

          <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto mr-8  hover:scale-110'>
            <Play className='fill-black' />
          </button>

          <SkipForward size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
        </div>

        <div className='flex items-center gap-4'>
          <span className='text-xs text-zinc-200'>0:31</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
          </div>
          <span className='text-xs text-zinc-200'>2:14</span>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className='flex items-center gap-2'>
          <Volume size={20} />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
          </div>
        </div>
        <Maximize />
      </div>
    </footer>
  )
}
