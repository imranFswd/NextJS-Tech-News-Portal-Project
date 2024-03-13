
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/aceternity/navbar-menu-footer-latest";
import Link from "next/link";


function FooterNavbarLatest({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);

  return (
    // <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-slate-400", className)}>
    <div>
        <div>
        <Menu setActive={setActive}>
            
            <Link href={"/redmi-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Redmi Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/samsung-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Samsung Note S24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/realme-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Realme Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/iphone-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1 border-b-[1px]">
                <MenuItem setActive={setActive} active={active} item="Iphone Note 24 Pro">

                </MenuItem>
            </Link>

            <Link href={"/oppo-note-24-pro"} className=" transition-all duration-300  p-2 line-clamp-1">
                <MenuItem setActive={setActive} active={active} item="Oppo Note 24 pro">

                </MenuItem>
            </Link>

            <Link href={"/view-more-latest"} className=" transition-all duration-300  p-2 line-clamp-1 bg-gray-100 hover:bg-white text-center !uppercase inline-block mt-10 shadow-md hover:shadow-md rounded-full ">
                <MenuItem setActive={setActive} active={active} item="view more">

                </MenuItem>
            </Link>

        </Menu>
        </div>
    </div>
  )
}

export default FooterNavbarLatest
