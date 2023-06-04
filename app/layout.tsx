import '@/styles/globals.css'

export const metadata = {
    title: 'nuDeventer.nl - Alles met betrekking tot Deventer op één plek.',
    description: 'Alles met betrekking tot Deventer op één plek.',
    icons: {
        icon: '/favicon.ico'
    }

}

{/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */ }
{/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */ }
{/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */ }
{/* <link rel="manifest" href="/site.webmanifest"></link> */ }

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html className='min-h-screen'>
            <body className='min-h-screen'>
                {children}
            </body>
        </html>
    )
}