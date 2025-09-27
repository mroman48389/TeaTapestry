import NavSidebarListItem from "./NavSidebarListItem";

import { ComponentPropsWithoutRef } from "react";

type NavSidebarListProps = {
    open: boolean;
} & ComponentPropsWithoutRef<"ul">;

export default function NavSidebarList(props: NavSidebarListProps) {

    const {open, ...rest} = props;

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
                {...rest} 
                className={`nav-list overflow-hidden transition-opacity duration-150 ${open ? "relative opacity-100 delay-150" : "absolute opacity-0"}`}
            >
                <NavSidebarListItem itemName="Home" pageLink=""/>
                <NavSidebarListItem itemName="What is tea?" pageLink=""/>
                <NavSidebarListItem itemName="Where does tea come from?" pageLink=""/>
                <NavSidebarListItem itemName="Growing and processing" pageLink=""/>
                <NavSidebarListItem itemName="Brewing methods" pageLink=""/>
                <NavSidebarListItem itemName="Experiencing tea" pageLink=""/>
                <NavSidebarListItem itemName="Tea profiles" pageLink=""/>
                <NavSidebarListItem itemName="Teaware" pageLink=""/>
                <NavSidebarListItem itemName="Tea terminology" pageLink=""/>
            </ul>
        </>
    );
}