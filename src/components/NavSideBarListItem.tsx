import { ComponentPropsWithoutRef } from "react";

type NavSideBarListItemProps = {
    itemName: string;
} & ComponentPropsWithoutRef<"li">;

export default function NavSideBarListItem(props: NavSideBarListItemProps) {

    const {itemName, ...rest} = props;

    return (
        <>
            <li className="btn"{...rest}>{itemName}</li>
        </>
    );
}