import { render, screen, fireEvent } from "@testing-library/react";

import TopNavbarListItem from "./TopNavbarListItem";

import { renderWithRouter, createMemoizedComponentWithSpy } from "@/utils/test-utils";

import { pageIDs } from "@/constants/pages";

describe("TopNavbarListItem", () => {

    /* Unit tests */

    it("Unit test: Calls onSelectPage when anchor is clicked.", () => {
        const mockSelect = jest.fn();
    
        renderWithRouter(
            <TopNavbarListItem
                pageID={pageIDs.about}
                selectedPageID={pageIDs.about}
                onSelectPage={mockSelect}
            />
        );
    
        const anchor = screen.getByRole("link", { name: /about/i });
        fireEvent.click(anchor);
    
        expect(mockSelect).toHaveBeenCalledTimes(1);
        expect(mockSelect).toHaveBeenCalledWith(pageIDs.about);
    });

    it("Unit test, Memoization: Does not re-render when props are unchanged.", () => {
        const options = {
            displayName: "MemoizedTopNavbarListItem",
            withRouter: true,
        };
        const { Memoized, spy } = createMemoizedComponentWithSpy(TopNavbarListItem, options);

        const onSelectPage = () => {};

        const { rerender } = render(
            <Memoized
                pageID={pageIDs.about}
                selectedPageID={pageIDs.about}
                onSelectPage={onSelectPage}
            />
        );
    
        rerender(
            <Memoized
                pageID={pageIDs.about}
                selectedPageID={pageIDs.about}
                onSelectPage={onSelectPage}
            />
        );
    
        expect(spy).toHaveBeenCalledTimes(1);
      });
      
      it("Unit test, Memoization: Re-renders when page selection changes.", () => {
        const onSelectPage = () => {};

        const options = {
            displayName: "MemoizedTopNavbarListItem",
            withRouter: true,
        };
        const { Memoized, spy } = createMemoizedComponentWithSpy(TopNavbarListItem, options);

        const { rerender } = render(
            <Memoized
                pageID={pageIDs.about}
                selectedPageID={pageIDs.about}
                onSelectPage={onSelectPage}
            />
        );
    
        rerender(
            <Memoized
                pageID={pageIDs.about}
                selectedPageID={pageIDs.brewingMethods}
                onSelectPage={onSelectPage}
            />
        );
    
        expect(spy).toHaveBeenCalledTimes(2); 
    });

    it("Unit test, Memoization: Re-renders when onSelectPage changes but page selection stays the same.", () => {
        const options = {
            displayName: "MemoizedTopNavbarListItem",
            withRouter: true,
        };
        const { Memoized, spy } = createMemoizedComponentWithSpy(TopNavbarListItem, options);

        const firstCallback = () => {};
        const secondCallback = () => {}; // different reference
      
        const { rerender } = render(
            <Memoized
                pageID={pageIDs.about}
                selectedPageID={pageIDs.about}
                onSelectPage={firstCallback}
            />
        );
      
        rerender(
            <Memoized
                pageID={pageIDs.about}
                selectedPageID={pageIDs.about}
                onSelectPage={secondCallback}
            />
        );
      
        expect(spy).toHaveBeenCalledTimes(2);
      });

    /* Integration tests */

    it("Integration test: Renders the TopNavbarListItem with the same pageID as selectedPageID.", () => {
        renderWithRouter(<TopNavbarListItem pageID={pageIDs.about} selectedPageID={pageIDs.about} onSelectPage={() => {}}/>);
        expect(screen.getByTestId("top-navbar-list-item")).toBeInTheDocument();
        expect(screen.getByTestId("twisted-threads-underline")).toBeInTheDocument();
    });

    it("Integration test: Renders the TopNavbarListItem with a different pageID than selectedPageID.", () => {
        renderWithRouter(<TopNavbarListItem pageID={pageIDs.about} selectedPageID={pageIDs.brewingMethods} onSelectPage={() => {}}/>);
        expect(screen.getByTestId("top-navbar-list-item")).toBeInTheDocument();
        /* Note use of queryByTestId, since we expect the conditionally rendered threads underline to not be present. */
        expect(screen.queryByTestId("twisted-threads-underline")).not.toBeInTheDocument();
    });
});