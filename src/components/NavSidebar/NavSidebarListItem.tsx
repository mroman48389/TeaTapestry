import { ComponentPropsWithoutRef } from "react";

type NavSidebarListItemProps = {
    itemName: string;
    pageLink : string;
} & ComponentPropsWithoutRef<"a">;

export default function NavSidebarListItem(props: NavSidebarListItemProps) {

    const {itemName, pageLink, ...rest} = props;

    return (
        <li>
            <a className="btn" href={pageLink} {...rest}>
                {itemName}
            </a>
        </li>
    );
}