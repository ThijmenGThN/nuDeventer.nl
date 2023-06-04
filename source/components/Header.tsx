"use client"

import { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation: Array<{ name: string, href: string }> = [
    { name: 'API', href: '/ontwikkelaars' },
    { name: 'Contact', href: 'mailto:info@nuDeventer.nl' }
]

export default function Component() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed bg-white/90 backdrop-blur-xl inset-x-0 top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <span className="sr-only">Nu Deventer</span>
                    <Link href="/" className="-m-1.5 p-1.5">
                        <p className="text-xl font-semibold">
                            <span className="text-blue-600">nu</span>
                            Deventer
                            <span className="text-base">.nl</span>
                        </p>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Menu openen</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} target='_blank' href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Nu Deventer</span>
                            <div className="flex lg:flex-1">
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <p className="text-xl font-semibold">
                                        <span className="text-blue-600">nu</span>
                                        Deventer
                                        <span className="text-base">.nl</span>
                                    </p>
                                </Link>
                            </div>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Menu sluiten</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

