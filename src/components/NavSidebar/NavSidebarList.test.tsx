import { render, screen } from "@testing-library/react";

import NavSidebarList from "./NavSidebarList";

import { pageIDs } from "@/constants/pages";

describe("NavSidebarList", () => {
    it("Renders the NavSidebarList.", () => {
        render(<NavSidebarList open={true} selectedPageID={pageIDs.about} onSelectPage={() => {}}/>);
        expect(screen.getByTestId("nav-sidebar-list")).toBeInTheDocument();
    });
});