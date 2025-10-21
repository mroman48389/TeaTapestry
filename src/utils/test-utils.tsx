import { ReactElement, memo, ComponentType } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export function renderWithRouter(ui: ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

/** 
    * Creates a memoized version of a component with a spy to track renders.
    * @param Component - The component to memoize and spy on
    * @param options - Optional configuration
    * @param options.withRouter - Whether to wrap the component in a MemoryRouter
    * @param options.displayName - Custom display name for the memoized component
    * @returns An object with the memoized component and the spy function
    * 
    * extends JSX.IntrinsicAttributes is needed to tell TypeScript that TProps
    * includes key, ref, and other metadata.
    * 
    * Record<string, unknown> tells TypeScript that the type is an object with string keys and any values.
*/
export function createMemoizedComponentWithSpy<TProps extends JSX.IntrinsicAttributes & Record<string, unknown>>(
    Component: React.ComponentType<TProps>,
    options: { 
        withRouter?: boolean; 
        displayName?: string 
    } = {}
) {
    const spy = jest.fn();
    const { withRouter = false, displayName } = options;

    const MemoizedWrapper: ComponentType<TProps> = (props) => {
        spy();
        const element = <Component {...props}/>;
        return withRouter ? <MemoryRouter>{element}</MemoryRouter> : element;
    };

    /*  Get a name for the component, either,

            1. displayName: From the user (passed in as a parameter)
            2. (Component as any).displayName: From an already-set displayName on the original component.
            3. (Component as any).name: From the function name of the component.
            4. Component: Avoids undefined/empty names as a last resort.

        Component is cast as any because TypeScript doesn't guarantee is has displayName or name and this
        lets us safely access those properties.
    */

    /* Declare type for components that might have displayName. */
    type ComponentWithDisplayName = React.ComponentType<TProps> & {
        displayName?: string;
        name?: string;
    };

    let componentName = "Component"; // Default fallback
    const typedComponent = Component as ComponentWithDisplayName;
    
    if (displayName) {
        componentName = displayName;
    } 
    else if (typedComponent.displayName) {
        componentName = typedComponent.displayName;
    } 
    else if (typeof Component === "function" && typedComponent.name) {
        componentName = typedComponent.name;
    }

    MemoizedWrapper.displayName = `Memoized(${componentName})`;

    const Memoized = memo(MemoizedWrapper);
    Memoized.displayName = componentName;

    return { Memoized, spy };
}



// export function createMemoizedComponentWithSpy<T extends JSXElementConstructor<any>>(
//     Component: T,
//     options: { 
//         withRouter?: boolean; 
//         displayName?: string 
//     } = {}
// ) {
//     const spy = jest.fn();
//     const { withRouter = false, displayName } = options;

//     /*  React.ComponentProps<T>: Extracts the prop types from component T.

//         PropsWithRef<React.ComponentProps<T>>: Wraps the prop types to include ref support in case the 
//             memoized wrapper needs a ref forwarded by a React component.

//         ComponentType<PropsWithRef<React.ComponentProps<T>>: Turn it into a valid React component.
//     */
//     const MemoizedWrapper: ComponentType<PropsWithRef<React.ComponentProps<T>>> = (props) => {
//         spy();
//         const element = <Component {...props}/>;
//         return withRouter ? <MemoryRouter>{element}</MemoryRouter> : element;
//     };

//     /*  Get a name for the component, either,

//             1. displayName: From the user (passed in as a parameter)
//             2. (Component as any).displayName: From an already-set displayName on the original component.
//             3. (Component as any).name: From the function name of the component.
//             4. Component: Avoids undefined/empty names as a last resort.

//         Component is cast as any because TypeScript doesn't guarantee is has displayName or name and this
//         lets us safely access those properties.
//     */
//     const componentName =
//         displayName ||
//         (Component as any).displayName ||
//         (Component as any).name ||
//         "Component";

//     MemoizedWrapper.displayName = `Memoized(${componentName})`;

//     const Memoized = memo(MemoizedWrapper);
//     Memoized.displayName = componentName;

//     return { Memoized, spy };
// }