import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Page() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />

            <main className="flex flex-col gap-8 mx-auto max-w-7xl my-40 px-6 pb-8 pt-24 lg:px-8">
                <div className="my-auto text-center">
                    <p className="text-base font-semibold text-theme-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pagina niet gevonden</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we kunnen de pagina die u zoekt niet vinden.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-theme-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-theme-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-primary"
                        >
                            Terug naar thuispagina
                        </Link>
                        <Link href="mailto:info@nuDeventer.nl" className="text-sm font-semibold text-gray-900">
                            Contact <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
