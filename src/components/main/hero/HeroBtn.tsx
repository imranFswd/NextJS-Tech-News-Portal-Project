
import Link from 'next/link'
import { Button } from '@/components/ui/aceternity/moving-border'


function HeroBtn() {
  return (
    <div className='mt-10'>
        <Link href={"/explore-more"}>
            <Button borderRadius='1.75rem' className='bg-white hover:bg-green-50 focus:bg-green-500 dark:bg-black text-black dark:text-white border-neutral-200 hover:border-black/[0.2] dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300'>
                <span className='capitalize'>explore more</span>
            </Button>
        </Link>
    </div>
  )
}

export default HeroBtn
