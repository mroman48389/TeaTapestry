import { screen } from "@testing-library/react";

import NavSidebarList from "./NavSidebarList";

import { renderWithRouter } from "@/utils/test-utils";

import { pageIDs } from "@/constants/pages";

describe("NavSidebarList", () => {
    it("Renders the NavSidebarList.", () => {
        renderWithRouter(<NavSidebarList open={true} selectedPageID={pageIDs.about} onSelectPage={() => {}}/>);
        expect(screen.getByTestId("nav-sidebar-list")).toBeInTheDocument();
    });
});