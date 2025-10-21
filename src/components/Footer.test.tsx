import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {

    /* Unit tests */

    it("Unit test: Renders the Footer at closed sidebar margin left when nav sidebar is closed.", () => {
        render(<Footer sidebarOpen={false}/>);
        expect(screen.getByTestId("footer")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toHaveClass("ml-[var(--closed-nav-sidebar-width)]");
    });

    it("Unit test: Renders the Footer at open sidebar margin left when nav sidebar is open.", () => {
        render(<Footer sidebarOpen={true}/>);
        expect(screen.getByTestId("footer")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toHaveClass("ml-[var(--open-nav-sidebar-width)]");
    });

});