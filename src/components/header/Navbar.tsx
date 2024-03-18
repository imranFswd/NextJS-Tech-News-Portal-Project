
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
                <HoveredLink href="/s/samsung">samsung</HoveredLink>
                    <HoveredLink href="/s/xiaomi">xiaomi</HoveredLink>
                    <HoveredLink href="/s/walton">walton</HoveredLink>
                    <HoveredLink href="/s/oppo">oppo</HoveredLink>
                    <HoveredLink href="/s/vivo">vivo</HoveredLink>
                    <HoveredLink href="/s/iqoo">iqoo</HoveredLink>
                    <HoveredLink href="/s/iphone">iphone</HoveredLink>
                    <HoveredLink href="/s/all-smartphone">all smartphone</HoveredLink>
                    
                </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Tablet">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/t/samsung">samsung</HoveredLink>
                    <HoveredLink href="/t/xiaomi">xiaomi</HoveredLink>
                    <HoveredLink href="/t/walton">walton</HoveredLink>
                    <HoveredLink href="/t/ipad">ipad</HoveredLink>
                    <HoveredLink href="/t/all-tablet">all tablet</HoveredLink>
                </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Laptop">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/l/dell">dell</HoveredLink>
                    <HoveredLink href="/l/hp">hp</HoveredLink>
                    <HoveredLink href="/l/walton">walton</HoveredLink>
                    <HoveredLink href="/l/all-laptop">all laptop</HoveredLink>
                    
                </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Desktop">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/d/dell">dell</HoveredLink>
                    <HoveredLink href="/d/hp">hp</HoveredLink>
                    <HoveredLink href="/d/walton">walton</HoveredLink>
                    <HoveredLink href="/d/all-desktop">all desktop</HoveredLink>
                    
                </div>
            </MenuItem>

        </Menu>
        </div>
    </div>
  )
}

export default Navbar
