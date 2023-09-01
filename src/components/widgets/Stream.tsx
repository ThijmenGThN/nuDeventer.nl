"use client"

import { useEffect, useRef, useState } from 'react'
import { MediaOutlet, MediaPlayer } from '@vidstack/react'
import Image from 'next/image'
import Link from 'next/link'

import aMapGear from '@/assets/icons/mapgears.webp'

const feed = 'https://streaming02-mapgear.heuve.link/deventer_rvdr/_definst_/camera1.stream/playlist.m3u8'

export default function Component() {
    const loader: any = useRef()
    const player: any = useRef()

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => { setIsLoading(false) }, [])

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <span className="inline-flex uppercase items-center rounded-md bg-blue-100 px-3 py-1 font-medium text-primary">
                    live
                </span>
                <span className='text-xl font-semibold'>Webcamera</span>
            </div>

            <div className='mb-[1.125rem]'>
                <div className='-z-10 relative bg-primary aspect-video overflow-hidden rounded-lg'>
                    {
                        !isLoading && (
                            <MediaPlayer liveEdgeTolerance={5} streamType="live" ref={player} className='w-full h-full'
                                onPlay={() => loader.current?.classList.add('hidden')}
                                onError={error => console.error(error)}
                                src={feed}
                                playsinline
                                autoplay
                                muted
                            >
                                <MediaOutlet />
                            </MediaPlayer>
                        )
                    }

                    <div ref={loader} className='absolute flex flex-col items-center gap-8 w-full top-1/2 -translate-y-1/2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-12 h-12 animate-spin">
                            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                        </svg>

                        <p className='text-white font-semibold hidden sm:block'>Even geduld, de camera wordt geladen.</p>
                    </div>
                </div>

                <div className='z-10 px-4 -mt-[3.75rem] w-full flex'>
                    <div className='grow' />

                    <button className='bg-black p-2 m-1 transition-all hover:m-0 hover:p-3 hover:invert rounded' onClick={() => player.current.enterFullscreen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="w-5 h-5">
                            <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
                        </svg>
                    </button>

                    <Link href="https://mapgear.nl" target="_blank" className='bg-black p-2 m-1 transition-all hover:m-0 hover:p-3 hover:invert rounded'>
                        <Image src={aMapGear} alt="MapGear" className='w-5 h-5' />
                    </Link>
                </div>
            </div>
        </div>
    )
}