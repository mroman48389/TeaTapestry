import { render, screen } from "@testing-library/react";
// import {  fireEvent } from "@testing-library/react";
import NavSidebarToggle from "./NavSidebarToggle";
import NavSidebarList from "./NavSidebarList";
import NavSidebar from "./NavSidebar";

import { pageIDs } from "@/constants/pages";

describe("NavSidebar", () => {
    /* Unit tests */
    it("Renders the NavSidebarToggle.", () => {
        render(<NavSidebarToggle open={false} onToggleClick={() => {}}/>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("Renders the NavSidebarList.", () => {
        render(<NavSidebarList open={false} selectedPageID={pageIDs.about} onSelectPage={() => {}}/>);
        expect(screen.getByRole("list")).toBeInTheDocument();
    });

    /* Integration tests */

    it("Renders toggle and list.", () => {
        render(<NavSidebar sidebarOpen={false} onOpenSidebar={() => {}} selectedPageID={pageIDs.about} onSelectPage={() => {}}/>);
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByRole("list")).toBeInTheDocument();
    });

    // it("Applies larger width class when open.", () => {
    //     render(<NavSidebarToggle open={true} onToggleClick={() => {}} />);
    //     const icon = screen.getByTestId("nav-sidebar-toggle-icon");
    //     expect(icon).toHaveClass("rotate-180");
    // });

    // it("Applies smaller width class when closed.", () => {
    //     render(<NavSidebarToggle open={false} onToggleClick={() => {}} />);
    //     const icon = screen.getByTestId("nav-sidebar-toggle-icon");
    //     expect(icon).not.toHaveClass("rotate-180");
    // });
});