
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/aceternity/navbar-menu-footer";
import Link from "next/link";


function FooterNavbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);

  return (
    // <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-slate-400", className)}>
    <div>
        <div>
        <Menu setActive={setActive}>
            
            <Link href={"/"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Home">

                </MenuItem>
            </Link>

            <Link href={"/smartphone"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="smartphone">

                </MenuItem>
            </Link>

            <Link href={"/tablet"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="tablet">

                </MenuItem>
            </Link>

            <Link href={"/laptop"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="laptop">

                </MenuItem>
            </Link>

            <Link href={"/desktop"} className=" transition-all duration-300  p-2 line-clamp-1">
                <MenuItem setActive={setActive} active={active} item="desktop">

                </MenuItem>
            </Link>

            <Link href={"/view-more-brands"} className=" transition-all duration-300  p-2 line-clamp-1 bg-gray-100 hover:bg-white text-center !uppercase inline-block mt-10 shadow-md hover:shadow-md rounded-full ">
                <MenuItem setActive={setActive} active={active} item="view more">

                </MenuItem>
            </Link>


        </Menu>
        </div>
    </div>
  )
}

export default FooterNavbar
