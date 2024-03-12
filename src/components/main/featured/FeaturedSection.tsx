
"use client"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Button } from "@/components/ui/moving-border"
import techData from "@/data/tech.json"
// import Image from "next/image"
import Link from "next/link"


interface Tech{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    relesedDate: string,
    isFeatured: boolean,
    image: string
}


function FeaturedSection() {

    const featuredData = techData.tech.filter((tech:Tech) => tech.isFeatured)

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">

        <div>
            <div className="text-center">
                <div>
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">featured section</h2>
                </div>

                <div>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white sm:text-4xl capitalize  transition-all duration-300">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>

        <div className="mt-20">
        
            {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row px-5 justify-center"> */}
            <div className="flex justify-center items-center flex-wrap px-5">
                {
                    featuredData.map((tech:Tech) => (
                        <div key={tech.id} className="p-5">
                            <BackgroundGradient className="flex flex-col rounded-[1.5rem] cursor-default selection:bg-teal-600  hover:bg-white bg-teal-50 dark:bg-zinc-900 overflow-hidden h-full --max-w-sm">
                                <div className="p-[1.875rem] sm:p-10 flex flex-col items-center text-center flex-grow">

                                    <BackgroundGradient className="min-w-5">
                                        <div className="overflow-hidden bg-slate-50000 rounded-[1rem] shadow-sm  border--border-teal-100 hover:shadow-md ">
                                            {/* <Image
                                                src={`${tech.image}`}
                                                alt={`${tech.title} image missing !!!`}
                                                height="240"
                                                width="240"
                                                className="object-cover shadow-md  hover:scale-110 transition-all duration-500"
                                            /> */}
                                        </div>
                                    </BackgroundGradient>

                                    <div className="mt-[0.625rem]">
                                    <h3 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200  line-clamp-1  max-w-60">
                                        {tech.title}
                                    </h3>
                                    </div>

                                    <div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow line-clamp-3 max-w-60">{tech.description}</p>
                                    </div>

                                    <div className="mt-[0.625rem]">
                                        <Link href={`/tech/${tech.slug}`} className="border-[black] dark:border-white  border-2 transition-all duration-300 rounded-full pl-6 pr-6 py-[0.5rem] capitalize tracking-widest hover:shadow-md text-white hover:text-black dark:hover:text-white dark:text-black flex items-center space-x-1 bg-[#234] hover:bg-white mt-4 text-xs font-bold dark:bg-zinc-800 dark:hover:bg-white">
                                            <span>learn more</span>
                                            {/* <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">&gt;</span> */}
                                        </Link>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="mt-20 text-center">

            <Link href={"/explore-more"}>
                <Button borderRadius='0.25rem' className='px-2 py-[0.25rem] rounded border border-teal-400 hover:border-teal-600 text-neutral-700 bg-white hover:bg-teal-50 dark:hover:bg-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-600 transition duration-300'>
                    <span className='capitalize'>read more</span>
                </Button>
            </Link>
           
        </div>

    </div>
  )
}

export default FeaturedSection
