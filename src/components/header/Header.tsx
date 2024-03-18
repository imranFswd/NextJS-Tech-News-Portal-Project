
import React from 'react'
import Navbar from '@/components/header/Navbar'
import Logo from '@/components/header/Logo'
import { cn } from "@/utils/cn";


function Header({ className }: { className?: string }) {
  return (
    <div>
        <div className=''>
            <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
                <div>
                    <div>
                        <div className="hidden">
                            <Logo />
                        </div>

                        <div>
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
