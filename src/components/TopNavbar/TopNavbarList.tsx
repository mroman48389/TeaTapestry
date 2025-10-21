
import { ComponentPropsWithoutRef } from "react";
// import { useState } from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { pageIDs, PageID } from "@/constants/pages";
import TopNavbarListItem from "./TopNavbarListItem";

type TopNavbarListProps = {
    selectedPageID: PageID;
    onSelectPage : (value: PageID) => void;
} & ComponentPropsWithoutRef<"ul">;

export default function TopNavbarList(props: TopNavbarListProps) {
    const {selectedPageID, onSelectPage, ...rest} = props;

    return (
        <nav className="flex" aria-label="Top navbar">
            <ul data-testid="top-navbar-list" className="top-navbar-list" {...rest}> 
                <TopNavbarListItem 
                    pageID={pageIDs.home}
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                />

                <TopNavbarListItem 
                    pageID={pageIDs.about}
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                />

                <TopNavbarListItem 
                    pageID={pageIDs.whatsNew}
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                />

                <TopNavbarListItem 
                    pageID={pageIDs.contact}
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                />

                <li className="mr-0">
                    <Avatar>
                        <AvatarImage src="/user.jpg" alt="User" />
                        <AvatarFallback>
                            {/* Using height and width from Tailwind didn't work with MUI, so use style. */}
                            <AccountCircleIcon 
                                style={{ height: '1.9rem', width: '1.9rem' }} 
                                className="text-dark-mahogany-brown" 
                            />
                        </AvatarFallback>
                    </Avatar>
                </li>

                <TopNavbarListItem 
                    pageID={pageIDs.logIn}
                    selectedPageID={selectedPageID}
                    onSelectPage={onSelectPage}
                />
            </ul>
        </nav>
    );
}