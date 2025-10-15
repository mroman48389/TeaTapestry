import { ComponentPropsWithoutRef, memo } from "react";

import { Pages, PageID } from "@/constants/pages";

type TopNavbarListItemProps = {
    pageID: PageID;
    selectedPageID: PageID;
    onSelectPage: (value: PageID) => void;
} & ComponentPropsWithoutRef<"a">;

function TopNavbarListItem(props: TopNavbarListItemProps) {
    const {pageID, onSelectPage, ...rest} = props;
    // selectedPageID,
    const itemName = Pages[pageID].title;
    const pageLink = Pages[pageID].path;

    function onAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
        /* Prevent browser from navigating; we'll handle it with React Router ourselves. If we let the browser do this,
           it will navigate to a new URL, reload the app, and wipe out our state. */
        e.preventDefault(); 
        onSelectPage(pageID);
    }

    return (
        <li>
            <a className="btn top-navbar-btn" href={pageLink} onClick={onAnchorClick} {...rest}>
                {itemName}
            </a>
        </li>
    );
}

/* Only re-render if the selection status changed (item was selected and now isn't or vice versa) or onSelectPage changed 
    (it  shouldn't since it's also memoized). */
export default memo(TopNavbarListItem, (prev, next) => {
    const wasSelected = prev.pageID === prev.selectedPageID;
    const isSelected = next.pageID === next.selectedPageID;
    const selectionChanged = wasSelected !== isSelected;
    const onSelectPageChanged = prev.onSelectPage !== next.onSelectPage; 

    return (
        (!selectionChanged) && (!onSelectPageChanged)   
    );
});