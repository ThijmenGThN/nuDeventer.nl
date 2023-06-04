"use client"

import { MediaOutlet, MediaPlayer } from '@vidstack/react'

const feed = 'https://streaming02-mapgear.heuve.link/deventer_rvdr/_definst_/camera1.stream/playlist.m3u8'

export default function Component() {

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
          poster="stream/poster.webp"
          src={feed}
          autoplay
          playsinline
          muted
        >
          <MediaOutlet />
        </MediaPlayer>
      </div>
    </div>
  )
}