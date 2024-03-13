
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/aceternity/navbar-menu-footer-top";
import Link from "next/link";


function FooterNavbarTop({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);

  return (
    // <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-slate-400", className)}>
    <div>
        <div>
        <Menu setActive={setActive}>
            
            <Link href={"/vivo-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Vivo Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/oneplus-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Oneplus Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/walton-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Walton Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/poco-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Poco Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/sony-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1">
                <MenuItem setActive={setActive} active={active} item="Sony Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/view-more-top"} className=" transition-all duration-300  p-2 line-clamp-1 bg-gray-100 hover:bg-white text-center !uppercase inline-block mt-10 shadow-md hover:shadow-md rounded-full ">
                <MenuItem setActive={setActive} active={active} item="view more">

                </MenuItem>
            </Link>



        </Menu>
        </div>
    </div>
  )
}

export default FooterNavbarTop
