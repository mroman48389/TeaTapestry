import { useState } from "react";

import NavSidebarToggle from "./NavSidebarToggle";
import NavSidebarList from "./NavSidebarList";

export default function NavSidebar() {
    const [open, setOpen] = useState(true);

    return (
        <nav aria-label="Nav sidebar">
            <div className={`nav-sidebar transition-[width] duration-200 ease-in-out ${open ? "w-73": "w-14"}`}>
                <NavSidebarToggle 
                    open={open}
                    onToggleClick={() => setOpen(!open)}
                />
                <NavSidebarList
                    open={open}
                />
            </div>
        </nav>
    );
}