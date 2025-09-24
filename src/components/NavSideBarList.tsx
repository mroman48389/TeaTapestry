import NavSideBarListItem from "./NavSideBarListItem";

export default function NavSideBarList() {

    return (
        <>
            <ul className="nav-list">
                <NavSideBarListItem itemName="Home"/>
                <NavSideBarListItem itemName="What is tea?"/>
                <NavSideBarListItem itemName="Where does tea come from?"/>
                <NavSideBarListItem itemName="Growing and processing"/>
                <NavSideBarListItem itemName="Brewing methods"/>
                <NavSideBarListItem itemName="Experiencing tea"/>
                <NavSideBarListItem itemName="Tea profiles"/>
                <NavSideBarListItem itemName="Teaware"/>
                <NavSideBarListItem itemName="Tea terminology"/>
            </ul>
        </>
    );
}