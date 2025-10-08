
import { ComponentPropsWithoutRef } from "react";
// import { useState } from "react";

import { pageKeys, Pages } from "@/constants/pages";
import NavSidebarListItem from "./NavSidebarListItem";

type NavSidebarListProps = {
    open: boolean;
} & ComponentPropsWithoutRef<"ul">;

export default function NavSidebarList(props: NavSidebarListProps) {
    // const [selectedListItem, setSelectedListItem] = useState();
    const {open, ...rest} = props;

    const homeMeta = Pages[pageKeys.home];
    const whatIsTeaMeta = Pages[pageKeys.whatIsTea];
    const whereDoesTeaComeFromMeta = Pages[pageKeys.whereDoesTeaComeFrom];
    const growingAndProcessingMeta = Pages[pageKeys.growingAndProcessing];
    const brewingMethodsMeta = Pages[pageKeys.brewingMethods];
    const experiencingTeaMeta = Pages[pageKeys.experiencingTea];
    const teaProfileMeta = Pages[pageKeys.teaProfiles];
    const teawareMeta = Pages[pageKeys.teaware];
    const teaTerminologyMeta = Pages[pageKeys.teaTerminology];

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
                <NavSidebarListItem 
                    itemName={homeMeta.title} 
                    pageLink={homeMeta.path}
                />
                <NavSidebarListItem 
                    itemName={whatIsTeaMeta.title} 
                    pageLink={whatIsTeaMeta.path}
                />
                <NavSidebarListItem 
                    itemName={whereDoesTeaComeFromMeta.title} 
                    pageLink={whereDoesTeaComeFromMeta.path}
                />
                <NavSidebarListItem 
                    itemName={growingAndProcessingMeta.title} 
                    pageLink={growingAndProcessingMeta.path}
                />
                <NavSidebarListItem 
                    itemName={brewingMethodsMeta.title} 
                    pageLink={brewingMethodsMeta.path}
                />
                <NavSidebarListItem 
                    itemName={experiencingTeaMeta.title} 
                    pageLink={experiencingTeaMeta.path}
                />
                <NavSidebarListItem 
                    itemName={teaProfileMeta.title} 
                    pageLink={teaProfileMeta.path}
                />
                <NavSidebarListItem 
                    itemName={teawareMeta.title} 
                    pageLink={teawareMeta.path}
                />
                <NavSidebarListItem 
                    itemName={teaTerminologyMeta.title} 
                    pageLink={teaTerminologyMeta.path}
                />
            </ul>
        </>
    );
}