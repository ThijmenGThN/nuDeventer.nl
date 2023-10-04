"use client"

import { useTranslations } from 'next-intl'

import Header from './Header'
import Stream from './Stream'
import Footer from './Footer'

export default function Page() {
    const t = useTranslations('next-leaflet')

    return (
        <>
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>

            <Header />

            <main className="flex flex-col gap-8 mx-auto max-w-7xl px-6 pb-8 pt-24 lg:px-8">
                <Stream />
            </main>

            <Footer />
        </>

    )
}
