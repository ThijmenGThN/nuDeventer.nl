
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider as Localizer, useMessages } from 'next-intl'

import type { Metadata } from 'next'

import { locales } from '@/helpers/navigation'

import '@/styles/globals.css'

export const metadata: Metadata = {
    title: 'nuDeventer.nl',
    description: 'Alles met betrekking tot Deventer op één plek.',
    manifest: 'manifest.json'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {

    if (!locales.includes(locale as any)) notFound()

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <Localizer locale={locale} messages={useMessages()}>
                    {children}
                </Localizer>
            </body>
        </html>
    )
}
