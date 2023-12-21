
import { createSharedPathnamesNavigation } from 'next-intl/navigation'


export const locales = ['en', 'nl'] as const


export const defaultLocale = 'nl'
export const localePrefix = 'as-needed'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix })