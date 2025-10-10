
import { ComponentPropsWithoutRef } from "react";
// import { useState } from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { pageKeys, Pages } from "@/constants/pages";
import TopNavBarListItem from "./TopNavbarListItem";

type TopNavbarListProps = {

} & ComponentPropsWithoutRef<"ul">;

export default function TopNavbarList(props: TopNavbarListProps) {
    const {...rest} = props;

    const homeMeta = Pages[pageKeys.home];
    const aboutMeta = Pages[pageKeys.about];
    const whatsNewMeta = Pages[pageKeys.whatsNew];
    const contactMeta = Pages[pageKeys.contact];
    const logInMeta = Pages[pageKeys.logIn];

    return (
        <nav className="flex" aria-label="Top navbar">
            <ul className="top-navbar-list" {...rest}> 
                <TopNavBarListItem 
                    itemName={homeMeta.title} 
                    pageLink={homeMeta.path}
                />

                <TopNavBarListItem 
                    itemName={aboutMeta.title} 
                    pageLink={aboutMeta.path}
                />

                <TopNavBarListItem 
                    itemName={whatsNewMeta.title} 
                    pageLink={whatsNewMeta.path}
                />

                <TopNavBarListItem 
                    itemName={contactMeta.title} 
                    pageLink={contactMeta.path}
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

                <TopNavBarListItem 
                    itemName={logInMeta.title} 
                    pageLink={logInMeta.path}
                />
            </ul>
        </nav>
    );
}