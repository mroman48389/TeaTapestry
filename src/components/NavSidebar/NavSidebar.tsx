import { ComponentPropsWithoutRef } from "react";

import NavSidebarToggle from "./NavSidebarToggle";
import NavSidebarList from "./NavSidebarList";
import { PageID } from "@/constants/pages";

type NavSidebarProps = {
    sidebarOpen: boolean;
    onOpenSidebar: () => void;

    selectedPageID: PageID;
    onSelectPage : (value: PageID) => void;
} & ComponentPropsWithoutRef<"nav">;

export default function NavSidebar(props: NavSidebarProps) {
    const {sidebarOpen, onOpenSidebar, selectedPageID, onSelectPage, ...rest} = props;

    return (
        <nav aria-label="Nav sidebar" {...rest}>
            <div className={
                `nav-sidebar 
                transition-[width] 
                duration-200 ease-in-out 
                ${sidebarOpen ? "w-[var(--open-nav-sidebar-width)]" : "w-[var(--closed-nav-sidebar-width)]"}`
            }>
                <NavSidebarToggle 
                    open={sidebarOpen}
                    onToggleClick={onOpenSidebar}
                />
                <NavSidebarList
                    open={sidebarOpen}
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                />
            </div>
        </nav>
    );
}