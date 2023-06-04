"use client"

import { useState } from 'react'
import { MediaOutlet, MediaPlayer } from '@vidstack/react'

const feed = 'https://streaming02-mapgear.heuve.link/deventer_rvdr/_definst_/camera1.stream/playlist.m3u8'

export default function Component() {
  const [loading, setLoading] = useState<Boolean>(true)

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <span className="inline-flex uppercase items-center rounded-md bg-blue-100 px-3 py-1 font-medium text-blue-600">
          live
        </span>
        <span className='text-xl font-semibold'>Webcamera</span>
      </div>

      <div className='relative bg-black aspect-video overflow-hidden rounded-lg'>
        <MediaPlayer className='w-full h-full'
          src={feed}
          autoplay
          playsinline
          muted
          onPlaying={() => setLoading(false)}
        >
          <MediaOutlet />
        </MediaPlayer>

        <div className='absolute flex flex-col items-center gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-12 h-12 animate-spin">
            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
          </svg>

          <p className='text-white'>Even geduld, de camera wordt geladen.</p>
        </div>
      </div>
    </div>
  )
}