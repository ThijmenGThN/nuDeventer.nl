import '@/styles/globals.css'

export const metadata = {
    title: 'Nu Deventer',
    description: 'Alles omtrent Deventer op één locatie.',
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