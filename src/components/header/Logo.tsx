
import Link from 'next/link'
import React from 'react'


function Logo() {
  return (
    <div className='relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-5 '>
      <Link href={"/"}>
        <span>imranFswd</span>
      </Link>
    </div>
  )
}

export default Logo
