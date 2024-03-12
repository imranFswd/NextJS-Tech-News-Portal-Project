
"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


const testimonials = [
    {
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum corrupti voluptas ratione, cumque veniam sed? Voluptates nulla ducimus at impedit mollitia magni, laboriosam nihil sit obcaecati consequatur saepe sapiente tenetur rem expedita?",
        name: "sample name 01",
        title: "sample title 01",
    },
    {
        quote: "Nostrum, aliquam. Tempora adipisci rerum laborum voluptas sed repellat unde corrupti provident fugiat aut voluptatum voluptatibus a ex ipsam laboriosam quod, obcaecati, praesentium quaerat, dolores amet! Suscipit veniam pariatur voluptatum beatae totam?",
        name: "sample name 02",
        title: "sample title 02",
    },
    {
        quote: "Ipsa voluptatem libero veritatis doloribus recusandae reprehenderit saepe illum repellendus. Odio nostrum, ex asperiores minus, quod ducimus illum dolorum veniam sit expedita aperiam, consectetur provident! Omnis corrupti totam, enim dignissimos eligendi quaerat!",
        name: "sample name 03",
        title: "sample title 03",
    },
    {
        quote: "Unde architecto nemo temporibus repudiandae amet reiciendis doloremque error sunt corporis excepturi corrupti tenetur, recusandae eos sequi optio accusamus voluptas ducimus eaque dolorum id illum dicta provident illo? Voluptatem ut temporibus culpa.",
        name: "sample name 04",
        title: "sample title 04",
    },
    {
        quote: "Facilis accusantium iusto repudiandae iste excepturi sapiente. Velit, repellat, molestias quis id dolore esse ullam doloribus possimus iusto quisquam reiciendis mollitia perferendis nobis soluta obcaecati eius in, tempora illo quo. Reprehenderit, excepturi.",
        name: "sample name 05",
        title: "sample title 05",
    },
    {
        quote: "Blanditiis corporis aut, voluptatum maxime quidem neque ad nobis sunt inventore aliquam rerum et unde nulla repudiandae doloremque nemo eos obcaecati. Nostrum praesentium ducimus quo quidem dolor dolores dolorum maxime quos saepe!",
        name: "sample name 06",
        title: "sample title 06",
    },
    {
        quote: "Ullam at, temporibus dolorum voluptas delectus asperiores corrupti excepturi, eius dignissimos exercitationem iste ab iusto nihil eligendi accusantium aspernatur vel ex quis. Aliquid beatae deserunt voluptatem iure pariatur temporibus, facilis maiores nulla!",
        name: "sample name 07",
        title: "sample title 07",
    },
    {
        quote: "Doloribus magni explicabo odit atque sit, delectus voluptatibus dicta odio provident ipsum aliquam magnam esse, temporibus fugit quos quidem molestias nobis repudiandae ab similique a quasi? Quisquam impedit et quis sint non?",
        name: "sample name 08",
        title: "sample title 08",
    },
    {
        quote: "Quibusdam aperiam doloremque molestias! Commodi, non modi. Impedit deleniti distinctio exercitationem! Doloribus, optio quam. Odio facilis labore dolor, harum magni dolorem distinctio nisi saepe autem corporis doloribus veritatis tempore ipsum, cum itaque?",
        name: "sample name 09",
        title: "sample title 09",
    },
    {
        quote: "Hic reprehenderit libero ipsam voluptatem labore nam eius in similique ratione consequuntur iure at numquam molestias ipsum officiis accusantium obcaecati, architecto, nihil perferendis facere beatae maxime? Modi ad sequi beatae nostrum amet!",
        name: "sample name 10",
        title: "sample title 10",
    },
    {
        quote: "Praesentium sit vel perspiciatis excepturi eligendi nihil molestias saepe incidunt voluptatum earum, expedita doloribus reiciendis similique nobis! Mollitia distinctio molestias officiis recusandae voluptate quam beatae veritatis, explicabo fuga perferendis, dicta vitae assumenda!",
        name: "sample name 11",
        title: "sample title 11",
    },
    {
        quote: "Corrupti similique soluta, dolorem molestiae reprehenderit ipsa. A beatae hic nihil harum consequuntur? Impedit, earum iste velit delectus at repellat qui, perferendis, distinctio placeat dolorum sapiente consequatur mollitia nesciunt neque hic et!",
        name: "sample name 12",
        title: "sample title 12",
    },
]


function TestimonialCards() {
  return (
    <div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

            <div>
                <h2 className="text-3xl font-bold text-center mb-8 z-10 capitalize ">Testimonials</h2>
            </div>

            <div className="flex justify-center w-full overflow-hidden px-4 sm:px6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards