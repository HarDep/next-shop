import { titleFont } from '@/configs/fonts'

export const Title = ({ title, subtitle, className = '' }: { title: string, subtitle?: string, className?: string }) => {
    return (
        <div className={`mt-3 ${className}`}>
            <h1 className={`${titleFont.className} antialiased text-2xl font-semibold my-8`}>{title}</h1>
            {
                subtitle && (
                    <h3 className='text-xl mb-5'>{subtitle}</h3>
                )
            }
        </div>
    )
}
