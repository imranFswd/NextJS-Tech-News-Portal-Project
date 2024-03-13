
"use client"
import { HoverEffect } from "@/components/ui/aceternity/card-hover-effect";
// import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Button } from "@/components/ui/aceternity/moving-border"
// import techData from "@/data/tech.json"
// import Image from "next/image"
import Link from "next/link"

function FeaturedBrandsSection() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">

    <div>
        <div className="text-center">
            <div>
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">featured brands section</h2>
            </div>

            <div>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white sm:text-4xl capitalize  transition-all duration-300">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>

    <div className="mt-20">
    
        <div className="max-w-7xl mx-auto px-8">
            <HoverEffect items={featuredBrandsProjects} />
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


export const featuredBrandsProjects = [
    {
      title: "realme",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et excepturi iste omnis delectus, dolore soluta maxime! Repudiandae, ad? Dolorem voluptatibus inventore, vel velit eaque illo tempora officia ab eum quam quisquam aliquam facilis delectus mollitia qui aspernatur officiis cupiditate distinctio voluptate expedita. Ipsam deserunt totam pariatur expedita quaerat quia!",
      link: "/realme",
    },
    {
      title: "walton",
      description:
        "Doloremque voluptatem quisquam quia mollitia voluptate facere et nisi dolor cumque. Corrupti ipsam nisi eos impedit. Fugiat delectus dolor quidem quam impedit, molestias praesentium libero dolorem obcaecati nemo velit repellat consequuntur illum magnam? Sapiente unde culpa maiores. Fugit provident possimus, deserunt ea, animi dolore quam atque dolor architecto dolorem ex.",
      link: "/walton",
    },
    {
      title: "Google",
      description:
        "Sequi tenetur natus nam optio quam ipsum amet expedita, aliquid non, voluptas voluptatum, quod nesciunt. Assumenda, ab? Fuga dolor ipsum saepe doloribus, harum laboriosam alias aliquam optio at praesentium, a unde quasi doloremque natus nam modi expedita possimus suscipit beatae ut quis, voluptatem aliquid recusandae? Quae similique recusandae enim ducimus.",
      link: "/google",
    },
    {
      title: "oppo",
      description:
        "Officiis consectetur iure adipisci, perspiciatis, harum blanditiis ut recusandae mollitia debitis cupiditate provident vel voluptates hic repudiandae quaerat autem est aliquid similique labore minus fuga amet expedita eos. Fuga eum, tenetur obcaecati eligendi consectetur perferendis quisquam officiis culpa asperiores, alias quas! Ab laudantium quae perspiciatis saepe quasi delectus, ut molestiae.",
      link: "/oppo",
    },
    {
      title: "redmi",
      description:
        "Nulla commodi dolor animi ex eos sit eligendi maxime voluptatibus blanditiis quo doloremque amet officia nihil, fugiat explicabo eius doloribus optio molestiae distinctio velit. Enim, reprehenderit deleniti? Beatae a recusandae sunt assumenda reprehenderit consequatur enim optio odit vero saepe placeat, ullam, sapiente temporibus hic neque! Deleniti amet praesentium numquam iste!",
      link: "/redmi",
    },
    {
      title: "Samsung",
      description:
        "Culpa ea doloribus quidem magni adipisci fugiat ullam, hic, dicta delectus maiores amet saepe earum quas eum facere provident corrupti cupiditate temporibus debitis alias! Numquam qui perspiciatis nam nisi id, dolore, esse ratione quidem ex eligendi maxime dolores, consequuntur laudantium voluptatem consequatur. Placeat repellendus voluptates aperiam harum id, modi laboriosam!",
      link: "/samsung",
    },
  ];


export default FeaturedBrandsSection
