import { ComponentPropsWithoutRef } from "react";

type TopNavbarListItemProps = {
    itemName: string;
    pageLink : string;
} & ComponentPropsWithoutRef<"a">;

export default function TopNavbarListItem(props: TopNavbarListItemProps) {
    const {itemName, pageLink, ...rest} = props;
    
    return (
        <li>
            <a className="btn top-navbar-btn" href={pageLink} {...rest}>
                {itemName}
            </a>
        </li>
    );
}