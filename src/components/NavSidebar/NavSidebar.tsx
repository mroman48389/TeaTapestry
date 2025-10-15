import { ComponentPropsWithoutRef, useState } from "react";

import NavSidebarToggle from "./NavSidebarToggle";
import NavSidebarList from "./NavSidebarList";
import { PageID } from "@/constants/pages";

type NavSidebarProps = {
    selectedPageID: PageID;
    onSelectPage : (value: PageID) => void;
} & ComponentPropsWithoutRef<"nav">;

export default function NavSidebar(props: NavSidebarProps) {
    const [open, setOpen] = useState(true);
    const {selectedPageID, onSelectPage, ...rest} = props;

    return (
        <nav aria-label="Nav sidebar" {...rest}>
            <div className={`nav-sidebar transition-[width] duration-200 ease-in-out ${open ? "w-73": "w-14"}`}>
                <NavSidebarToggle 
                    open={open}
                    onToggleClick={() => setOpen(!open)}
                />
                <NavSidebarList
                    open={open}
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                />
            </div>
        </nav>
    );
}