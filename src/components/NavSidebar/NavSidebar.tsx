import { useState } from "react";

import NavSidebarToggle from "./NavSidebarToggle";
import NavSidebarList from "./NavSidebarList";

export default function NavSidebar() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className={`nav-side-bar transition-[width] duration-200 ease-in-out ${open ? "w-64": "w-14"}`}>
                <NavSidebarToggle 
                    open={open}
                    onToggleClick={() => setOpen(!open)}
                />
                <NavSidebarList
                    open={open}
                />
            </div>
        </>
    );
}