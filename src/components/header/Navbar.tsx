
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/aceternity/navbar-menu";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);

  return (
    // <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-slate-400", className)}>
    <div>
        <div>
        <Menu setActive={setActive}>
            <Link href={"/"} className=" transition-all duration-300">
                <MenuItem setActive={setActive} active={active} item="Home">

                </MenuItem>
            </Link>

            <MenuItem  setActive={setActive} active={active} item="Smartphone">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/samsung">samsung</HoveredLink>
                    <HoveredLink href="/xiaomi">xiaomi</HoveredLink>
                    <HoveredLink href="/walton">walton</HoveredLink>
                    <HoveredLink href="/oppo">oppo</HoveredLink>
                    <HoveredLink href="/vivo">vivo</HoveredLink>
                    <HoveredLink href="/iqoo">iqoo</HoveredLink>
                    <HoveredLink href="/iphone">iphone</HoveredLink>
                    
                </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Tablet">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/samsung">samsung</HoveredLink>
                    <HoveredLink href="/xiaomi">xiaomi</HoveredLink>
                    <HoveredLink href="/walton">walton</HoveredLink>
                    <HoveredLink href="/ipad">ipad</HoveredLink>
                    
                </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Laptop">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/dell">dell</HoveredLink>
                    <HoveredLink href="/hp">hp</HoveredLink>
                    <HoveredLink href="/walton">walton</HoveredLink>
                    
                </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Desktop">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/dell">dell</HoveredLink>
                    <HoveredLink href="/hp">hp</HoveredLink>
                    <HoveredLink href="/walton">walton</HoveredLink>
                    
                </div>
            </MenuItem>

        </Menu>
        </div>
    </div>
  )
}

export default Navbar
