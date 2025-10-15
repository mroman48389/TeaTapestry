import { ComponentPropsWithoutRef } from "react";

import TeaTapestryLogo from '../../assets/tea-tapestry-logo-xi-shi-teapot-200x200.svg';
import { APP_TITLE } from "@/constants/app";
import { PageID } from "@/constants/pages";
import TopNavbarList from './TopNavbarList';

type TopNavbarProps = {
    selectedPageID: PageID;
    onSelectPage : (value: PageID) => void;
} & ComponentPropsWithoutRef<"header">;

export default function TopNavbar(props: TopNavbarProps) {
    const {selectedPageID, onSelectPage, ...rest} = props;

    return (
        <header className="top-navbar" {...rest}>
            <div className='ml-3 flex items-center justify-between gap-1'>
                <img src={TeaTapestryLogo} alt="Tea Tapestry logo" width={50} height={50}/>
                <span className='app-title'>{APP_TITLE}</span>
            </div>
            <TopNavbarList selectedPageID={selectedPageID} onSelectPage={onSelectPage}/>
        </header>
    );
}