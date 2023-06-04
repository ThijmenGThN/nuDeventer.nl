import '@/styles/globals.css'

export const metadata = {
    title: 'nuDeventer.nl - Alles met betrekking tot Deventer op één plek.',
    description: 'Alles met betrekking tot Deventer op één plek.',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html className='min-h-screen'>
            <body className='min-h-screen'>
                {children}
            </body>
        </html>
    )
}