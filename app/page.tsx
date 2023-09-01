import Header from '@/components/interface/Header'

import Stream from '@/components/widgets/Stream'

import Footer from '@/components/interface/Footer'

export default function Page() {
    return (
        <>
            <Header />

            <main className="flex flex-col gap-8 mx-auto max-w-7xl px-6 pb-8 pt-24 lg:px-8">
                <Stream />
            </main>

            <Footer />
        </>
    )
}
