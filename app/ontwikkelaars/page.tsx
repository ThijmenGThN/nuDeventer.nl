import Header from '@/components/Header'

import Footer from '@/components/Footer'

export default function Page() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />

            <main className="flex flex-col gap-8 mx-auto max-w-7xl my-40 px-6 pb-8 pt-24 lg:px-8">
                hi
            </main>

            <Footer />
        </div>
    )
}
