import Header from '@/components/Header'

import Stream from '@/components/Stream'
import Weather from '@/components/Weather'

import Footer from '@/components/Footer'

export default function Page() {
    return (
        <>
            <Header />

            <main className="flex flex-col gap-8 mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
                <Stream />

                <Weather />
            </main>

            <Footer />
        </>
    )
}
