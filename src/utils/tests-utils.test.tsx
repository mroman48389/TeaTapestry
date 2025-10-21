import { render, screen } from "@testing-library/react";

import { renderWithRouter, createMemoizedComponentWithSpy } from "./test-utils";

const TestDivArrowFunction = () => <div data-testid="test-div-arrow-function">Test div arrow function</div>;

function TestDivNamed() {
    return <div data-testid="test-div-named">Test div named</div>;
}

const TestDivNamedComponent = function TestDivNamedComponentFunction() {
    return <div data-testid="test-div-named-component">Named</div>;
};

describe("renderWithRouter", () => {

    it("Renders the component.", () => {
        renderWithRouter(<TestDivArrowFunction/>);
        expect(screen.getByTestId("test-div-arrow-function")).toBeInTheDocument();
    });

});

describe("createMemoizedComponentWithSpy", () => {

    it("Returns a memoized component and a spy.", () => {
        const { Memoized } = createMemoizedComponentWithSpy(TestDivArrowFunction);
        render(<Memoized/>);
        expect(screen.getByTestId("test-div-arrow-function")).toBeInTheDocument();
    });

    it("Calls spy on render.", () => {
        const { Memoized, spy } = createMemoizedComponentWithSpy(TestDivArrowFunction);
        render(<Memoized/>);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it("Uses passed in displayName for Component's displayName.", () => {
        const { Memoized } = createMemoizedComponentWithSpy(TestDivArrowFunction, {displayName: 'TestDisplayName'});
        render(<Memoized/>);
        expect(Memoized.displayName).toBe("TestDisplayName");
    });

    it("Uses preset displayName for Component's displayName.", () => {
        /* Need to cast as function component (FC) in order to use .displayName. */
        (TestDivArrowFunction as React.FC).displayName = 'TestDisplayName';
        const { Memoized } = createMemoizedComponentWithSpy(TestDivArrowFunction);
        render(<Memoized/>);
        expect(Memoized.displayName).toBe("TestDisplayName");
    });

    it("Uses the function name of the component as the displayName for the Component's displayName.", () => {
        const { Memoized } = createMemoizedComponentWithSpy(TestDivNamed);
        render(<Memoized/>);
        expect(screen.getByTestId("test-div-named")).toBeInTheDocument();
        expect(Memoized.displayName).toBe("TestDivNamed");
    });

    it("Uses Component.name when displayName is not set.", () => {        
        const { Memoized } = createMemoizedComponentWithSpy(TestDivNamedComponent);
        render(<Memoized/>);
        expect(Memoized.displayName).toBe("TestDivNamedComponentFunction");
    });

});