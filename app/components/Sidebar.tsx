import { Home as HomeIcon, Search, Library } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className='w-72 - bg-zinc-950 p-6'>
      <div className='flex gap-2 items-center'>
        <div className='w-3 h-3 bg-red-500 rounded-full mb-10' />
        <div className='w-3 h-3 bg-yellow-500 rounded-full mb-10' />
        <div className='w-3 h-3 bg-green-500 rounded-full mb-10' />
      </div>

      <nav className='space-y-6 '>
        <a href='' className='flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-400'>
          <HomeIcon />
          Home
        </a>
        <a href='' className='flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-400'>
          <Search />
          Search
        </a>
        <a href='' className='flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-400'>
          <Library />
          Your Library
        </a>
      </nav>

      {/* Playlists */}
      <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3 text-sm text-zinc-400'>
        <a href='' className='hover:text-white'>
          Palylist 1
        </a>
        <a href='' className='hover:text-white'>
          Palylist 2
        </a>
        <a href='' className='hover:text-white'>
          Palylist 3
        </a>
      </nav>
    </aside>
  )
}
