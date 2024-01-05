import { titleFont } from '@/configs/fonts'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='flex w-full justify-center text-xs mb-4'>
            <Link href={'/'}>
                <span className={`${titleFont.className} antialiased font-bold`}>App </span>
                <span>| shop </span>
                <span>© {new Date().getFullYear()}</span>
            </Link>
            <Link href={'/'} className='ml-3'>Privacidad & Legal</Link>
            <Link href={'/'} className='ml-3'>Ubicaciones</Link>
        </div>
    )
}