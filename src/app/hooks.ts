import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/* Establish type-safe, autocomplete-friendly versions of hooks. */

/* useAppDispatch is a hook that returns a function. "() => Name" is a function type annotation in TypeScript. 
   () takes arguments (none, in this case), and Name (the type alias)  is the type of the value returned by the function.  
   " = functionName;"  assigns the implementation of the function. */
export const useAppDispatch: () => AppDispatch = useDispatch;

/* Redux made a TypedUseSelectorHook helper specifically for useSelector (the long version is a beast to fully type out), 
   so we use that here instead of the syntax for useAppDispatch. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;