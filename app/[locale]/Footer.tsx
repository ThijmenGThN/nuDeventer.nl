import Link from "next/link"

const navigation = {
    highlights: [
        { name: 'Ontwikkelaars', href: '/ontwikkelaars' }
    ],
    sources: [
        { name: 'MapGear', href: 'https://www.mapgear.nl' },
        { name: 'Vallei Veluwe', href: 'https://www.vallei-veluwe.nl' }
    ],
    contact: [
        { name: 'info@nuDeventer.nl', href: 'mailto:mail@nuDeventer.nl' }
    ]
}

export default function Component() {
    return (
        <footer className="bg-gray-100 grow" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div>
                        <Link href="/" className="-m-1.5 p-1.5">
                            <p className="text-xl font-semibold">
                                <span className="text-primary">nu</span>
                                Deventer
                                <span className="text-base">.nl</span>
                            </p>
                        </Link>
                        <p className="text-sm leading-6 text-gray-600">
                            Alles met betrekking tot Deventer op één plek.
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <div>
                                <h3 className="mt-6 text-sm font-semibold leading-6 text-gray-900">
                                    Highlights
                                </h3>
                                <ul role="list" className="mt-3 space-y-4">
                                    {
                                        navigation.highlights.map((item) =>
                                            <li key={item.name}>
                                                <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className="mt-6 text-sm font-semibold leading-6 text-gray-900">
                                    Bronnen
                                </h3>
                                <ul role="list" className="mt-3 space-y-4">
                                    {
                                        navigation.sources.map((item) =>
                                            <li key={item.name}>
                                                <Link target="_blank" href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className="mt-6 text-sm font-semibold leading-6 text-gray-900">
                                    Contact
                                </h3>
                                <ul role="list" className="mt-3 space-y-4">
                                    {
                                        navigation.contact.map((item) =>
                                            <li key={item.name}>
                                                <Link target="_blank" href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-900/10 pt-8">
                    <p className="text-xs leading-5 text-gray-500">
                        &copy; {new Date().getFullYear()} nuDeventer.nl
                    </p>
                </div>
            </div>
        </footer>
    )
}
