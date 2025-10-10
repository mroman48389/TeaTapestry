import { ComponentPropsWithoutRef, useRef, useState, useEffect } from "react";
import TwistedThreadsUnderline from "../TwistedThreadsUnderline";

type NavSidebarListItemProps = {
    itemName: string;
    pageLink : string;
} & ComponentPropsWithoutRef<"a">;

export default function NavSidebarListItem(props: NavSidebarListItemProps) {
    /* Create ref for direct access to anchor element so we can grab info from it (the offsetWidth DOM measurement). We 
       Can't use useState to hold a DOM node directly, since React doesn't know when the DOM is ready. We'd end up
       triggering unncessary re-renders if we tried. This reference will persist across renders. */
    const textRef = useRef<HTMLAnchorElement>(null);
    const [textWidth, setTextWidth] = useState(0);
  
    const {itemName, pageLink, ...rest} = props;

    useEffect(() => {
        /* If text has been rendered, set its width as state. We'll use this width to determine how long the underline
           svg should be. Effect is dependent on the item name, so run again if item name changes. */
        if (textRef.current) {
            setTextWidth(textRef.current.offsetWidth);
        }
    }, [itemName]);    

    return (
        <li className="nav-sidebar-list-item">
            <a ref={textRef} className="btn" href={pageLink} {...rest}>
                {itemName}
            </a>
            <TwistedThreadsUnderline width={textWidth}/>
        </li>
    );
}