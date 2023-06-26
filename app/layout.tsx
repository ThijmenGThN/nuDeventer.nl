import { Inter } from 'next/font/google'

import '@/styles/globals.css'

export const metadata = {
  title: 'nuDeventer.nl',
  description: 'Alles met betrekking tot Deventer op één plek.',
  icons: { icon: '/favicon.ico' }
}

const Font = Inter({ subsets: ['latin'] })
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html className={Font.className + ' min-h-screen'}>
            <body className='min-h-screen'>
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                </svg>

                {children}
            </body>
        </html>
    )
}