
import { ComponentPropsWithoutRef } from "react";

import { pageIDs, PageID } from "@/constants/pages";
import NavSidebarListItem from "./NavSidebarListItem";

type NavSidebarListProps = {
    open: boolean;
    selectedPageID: PageID;
    onSelectPage: (value: PageID) => void;
} & ComponentPropsWithoutRef<"ul">;

export default function NavSidebarList(props: NavSidebarListProps) {
    const {open, selectedPageID, onSelectPage, ...rest} = props;


    /*  The following makes the text appear less clunky when the sidebar opens/closes.

        "overflow-hidden": Prevents text from spilling out while the sidebar is narrow.
        "transition-opacity duration-150": Smoothly fades the list in/out over 1.5 seconds
        
        "opacity-100 delay-200 relative": When sidebar is open, make the list fully visible after 1.5 seconds so you don't see
        the text until the sidebar finishes expanding. Relative keeps the list in the normal document flow.

        "opacity-0 absolute": When the sidebar is closed, make the text invisible immediately and position absolutely to 
        remove it from document flow so we don't see the text get squeezed as the sidebar shrinks.
    */
    return (
        <>
            <ul 
                className={`nav-sidebar-list overflow-hidden transition-opacity duration-150 ${open ? "relative opacity-100 delay-150" : "absolute opacity-0"}`}
                {...rest} 
            > 
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.home}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.whatIsTea}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.whereDoesTeaComeFrom}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.growingAndProcessing}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.brewingMethods}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.experiencingTea}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.teaProfiles}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.teaware}
                />
                <NavSidebarListItem 
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                    pageID={pageIDs.teaTerminology}
                />
            </ul>
        </>
    );
}